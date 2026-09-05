// ======================================================
// api/teacher-info.js
// ======================================================

const crypto = require("crypto");


// ======================================================
// CRIAR ASSINATURA
// ======================================================

function createSignature(payload) {

  const secret =
    process.env.SESSION_SECRET;


  return crypto
    .createHmac(
      "sha256",
      secret
    )
    .update(payload)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

}


// ======================================================
// DECODIFICAR BASE64 URL
// ======================================================

function decodeBase64Url(value) {

  let base64 =
    value
      .replace(/-/g, "+")
      .replace(/_/g, "/");


  while (
    base64.length % 4
  ) {

    base64 += "=";

  }


  return Buffer
    .from(
      base64,
      "base64"
    )
    .toString(
      "utf8"
    );

}


// ======================================================
// PEGAR COOKIES
// ======================================================

function parseCookies(req) {

  const cookieHeader =
    req.headers.cookie || "";


  const cookies = {};


  cookieHeader
    .split(";")
    .forEach(
      function (cookie) {

        const parts =
          cookie
            .trim()
            .split("=");


        const key =
          parts.shift();


        const value =
          parts.join("=");


        if (key) {

          cookies[key] =
            value;

        }

      }
    );


  return cookies;

}


// ======================================================
// COMPARAÇÃO SEGURA
// ======================================================

function safeCompare(
  valueA,
  valueB
) {

  const a =
    Buffer.from(valueA);

  const b =
    Buffer.from(valueB);


  if (
    a.length !==
    b.length
  ) {

    return false;

  }


  return crypto.timingSafeEqual(
    a,
    b
  );

}


// ======================================================
// VALIDAR TOKEN
// ======================================================

function validateSessionToken(
  token
) {

  if (!token) {

    return null;

  }


  const parts =
    token.split(".");


  if (
    parts.length !== 2
  ) {

    return null;

  }


  const payload =
    parts[0];


  const signature =
    parts[1];


  const expectedSignature =
    createSignature(
      payload
    );


  if (
    !safeCompare(
      signature,
      expectedSignature
    )
  ) {

    return null;

  }


  try {

    const decoded =
      decodeBase64Url(
        payload
      );


    const data =
      JSON.parse(
        decoded
      );


    const now =
      Math.floor(
        Date.now() / 1000
      );


    // Sessão expirada
    if (
      !data.exp ||
      data.exp < now
    ) {

      return null;

    }


    // Usuário precisa ser professor
    if (
      data.role !==
      "teacher"
    ) {

      return null;

    }


    return data;

  }

  catch (error) {

    return null;

  }

}


// ======================================================
// API
// ======================================================

module.exports =
  async function handler(
    req,
    res
  ) {


    // ==================================================
    // SOMENTE GET
    // ==================================================

    if (
      req.method !== "GET"
    ) {

      res.setHeader(
        "Allow",
        "GET"
      );


      return res
        .status(405)
        .json({

          success: false

        });

    }


    // ==================================================
    // CONFIGURAÇÃO
    // ==================================================

    if (
      !process.env.SESSION_SECRET
    ) {

      return res
        .status(500)
        .json({

          success: false

        });

    }


    // ==================================================
    // COOKIE
    // ==================================================

    const cookies =
      parseCookies(req);


    const token =
      cookies.teacher_session;


    // ==================================================
    // VALIDAR SESSÃO
    // ==================================================

    const session =
      validateSessionToken(
        token
      );


    if (!session) {

      return res
        .status(401)
        .json({

          success: false,

          message:
            "Não autorizado."

        });

    }


    // ==================================================
    // MEET
    // ==================================================

    const meetUrl =
      process.env.GOOGLE_MEET_URL;


    if (!meetUrl) {

      return res
        .status(500)
        .json({

          success: false,

          message:
            "Meet não configurado."

        });

    }


    // ==================================================
    // RESPOSTA
    // ==================================================

    return res
      .status(200)
      .json({

        success: true,

        meetUrl:
          meetUrl

      });

  };