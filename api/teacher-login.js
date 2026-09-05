// ======================================================
// api/teacher-login.js
// ======================================================

const crypto = require("crypto");


// ======================================================
// CONFIGURAÇÃO
// ======================================================

const SESSION_DURATION_SECONDS = 4 * 60 * 60;
// 4 horas


// ======================================================
// BASE64 URL
// ======================================================

function base64url(value) {

  return Buffer
    .from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

}


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
// CRIAR TOKEN
// ======================================================

function createSessionToken() {

  const now =
    Math.floor(
      Date.now() / 1000
    );


  const data = {

    role: "teacher",

    iat: now,

    exp:
      now +
      SESSION_DURATION_SECONDS

  };


  const payload =
    base64url(
      JSON.stringify(data)
    );


  const signature =
    createSignature(payload);


  return (
    payload +
    "." +
    signature
  );

}


// ======================================================
// COMPARAÇÃO SEGURA DE SENHA
// ======================================================

function safeCompare(
  received,
  expected
) {

  if (
    typeof received !== "string" ||
    typeof expected !== "string"
  ) {

    return false;

  }


  const receivedBuffer =
    Buffer.from(received);


  const expectedBuffer =
    Buffer.from(expected);


  if (
    receivedBuffer.length !==
    expectedBuffer.length
  ) {

    return false;

  }


  return crypto.timingSafeEqual(
    receivedBuffer,
    expectedBuffer
  );

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
    // SOMENTE POST
    // ==================================================

    if (
      req.method !== "POST"
    ) {

      res.setHeader(
        "Allow",
        "POST"
      );


      return res
        .status(405)
        .json({

          success: false,

          message:
            "Método não permitido."

        });

    }


    // ==================================================
    // VALIDAR CONFIGURAÇÃO
    // ==================================================

    if (
      !process.env.TEACHER_PASSWORD ||
      !process.env.SESSION_SECRET
    ) {

      console.error(
        "Variáveis de ambiente não configuradas."
      );


      return res
        .status(500)
        .json({

          success: false,

          message:
            "Servidor não configurado."

        });

    }


    // ==================================================
    // PEGAR SENHA
    // ==================================================

    const body =
      req.body || {};


    const password =
      body.password;


    // ==================================================
    // VALIDAR SENHA
    // ==================================================

    const validPassword =
      safeCompare(
        password,
        process.env.TEACHER_PASSWORD
      );


    if (!validPassword) {

      return res
        .status(401)
        .json({

          success: false,

          message:
            "Código inválido."

        });

    }


    // ==================================================
    // CRIAR SESSÃO
    // ==================================================

    const token =
      createSessionToken();


    // ==================================================
    // COOKIE
    // ==================================================

    const secure =
      process.env.NODE_ENV ===
      "production";


    const cookie = [

      `teacher_session=${token}`,

      "HttpOnly",

      "Path=/",

      "SameSite=Lax",

      `Max-Age=${SESSION_DURATION_SECONDS}`,

      secure
        ? "Secure"
        : ""

    ]
      .filter(Boolean)
      .join("; ");


    res.setHeader(
      "Set-Cookie",
      cookie
    );


    // ==================================================
    // OK
    // ==================================================

    return res
      .status(200)
      .json({

        success: true,

        role:
          "teacher"

      });

  };