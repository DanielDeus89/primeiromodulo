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

  if (
    typeof valueA !== "string" ||
    typeof valueB !== "string"
  ) {

    return false;

  }


  const a =
    Buffer.from(
      valueA,
      "utf8"
    );


  const b =
    Buffer.from(
      valueB,
      "utf8"
    );


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

function validateSessionToken(token) {

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


    // ==================================================
    // SESSÃO EXPIRADA
    // ==================================================

    if (
      !data.exp ||
      data.exp < now
    ) {

      return null;

    }


    // ==================================================
    // VALIDAR PERFIL
    // ==================================================

    if (
      data.role !== "teacher"
    ) {

      return null;

    }


    return data;

  }

  catch (error) {

    console.error(
      "Erro ao validar sessão:",
      error
    );


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

          success:
            false,

          message:
            "Método não permitido."

        });

    }


    // ==================================================
    // VALIDAR CONFIGURAÇÃO
    // ==================================================

    if (
      !process.env.SESSION_SECRET
    ) {

      console.error(
        "SESSION_SECRET não configurado."
      );


      return res
        .status(500)
        .json({

          success:
            false,

          message:
            "Servidor não configurado."

        });

    }


    // ==================================================
    // PEGAR COOKIE
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

          success:
            false,

          message:
            "Não autorizado."

        });

    }


    // ==================================================
    // PEGAR GOOGLE MEET
    // ==================================================

    const meetUrl =
      process.env.GOOGLE_MEET_URL;


    if (!meetUrl) {

      console.error(
        "GOOGLE_MEET_URL não configurado."
      );


      return res
        .status(500)
        .json({

          success:
            false,

          message:
            "Google Meet não configurado."

        });

    }


    // ==================================================
    // RESPOSTA
    // ==================================================

    return res
      .status(200)
      .json({

        success:
          true,

        role:
          session.role,

        meetUrl:
          meetUrl

      });

  };