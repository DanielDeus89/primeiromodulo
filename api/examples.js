// ======================================================
// GEMINI AI - EXEMPLOS B1 / B2 / C1
// VERCEL SERVERLESS FUNCTION
// ======================================================


// ======================================================
// CONFIGURAÇÕES GERAIS
// ======================================================

const MODEL =
process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

const LEVELS = ["B1", "B2", "C1"];

const GEMINI_API_BASE =
  "https://generativelanguage.googleapis.com/v1beta";


// ======================================================
// FUNÇÃO PRINCIPAL DA API
// ======================================================

module.exports = async function handler(req, res) {

  res.setHeader("Cache-Control", "no-store");


  // ====================================================
  // VALIDAR MÉTODO HTTP
  // ====================================================

  if (req.method !== "POST") {

    res.setHeader("Allow", "POST");

    return res.status(405).json({
      error: "Método não permitido."
    });

  }


  // ====================================================
  // VALIDAR CHAVE GEMINI
  // ====================================================

  const apiKey = process.env.GEMINI_API_KEY;

  console.log(
    "[GEMINI] Chave disponível:",
    Boolean(apiKey)
  );

  console.log(
    "[GEMINI] Modelo configurado:",
    MODEL
  );

  if (!apiKey) {

    return res.status(503).json({
      error: "GEMINI_API_KEY não configurada no servidor."
    });

  }


  // ====================================================
  // RECEBER PALAVRA E DEFINIÇÃO
  // ====================================================

  const word =
    typeof req.body?.word === "string"
      ? req.body.word.trim()
      : "";

  const definition =
    typeof req.body?.definition === "string"
      ? req.body.definition.trim().slice(0, 500)
      : "";


  // ====================================================
  // VALIDAR PALAVRA
  // ====================================================

  if (
    !word ||
    word.length > 80 ||
    !/^[\p{L}\p{M}\s'’-]+$/u.test(word)
  ) {

    return res.status(400).json({
      error: "Palavra inválida."
    });

  }


  // ====================================================
  // CRIAR PROMPT PEDAGÓGICO
  // ====================================================

  const prompt = [

    "You are an expert ESL teacher.",

    `Target English word or phrase: ${JSON.stringify(word)}.`,

    definition
      ? `Intended meaning: ${JSON.stringify(definition)}.`
      : "",

    "Write exactly three ORIGINAL natural English example sentences using the target word or phrase.",

    "Create one sentence for each CEFR level: B1, B2 and C1.",

    "B1: everyday vocabulary and straightforward grammar.",

    "B2: more complex vocabulary and realistic contexts.",

    "C1: nuanced vocabulary, advanced structures and sophisticated contexts.",

    "Keep each sentence between 6 and 25 words.",

    "Use the target expression exactly as written, ignoring capitalization where appropriate.",

    "Return ONLY valid JSON with this structure:",

    JSON.stringify({
      examples: [
        { level: "B1", text: "..." },
        { level: "B2", text: "..." },
        { level: "C1", text: "..." }
      ]
    })

  ].filter(Boolean).join("\n");


  try {

    // ==================================================
    // CONSTRUIR ENDPOINT GEMINI
    // ==================================================

    const endpoint =
      `${GEMINI_API_BASE}/models/` +
      `${encodeURIComponent(MODEL)}:generateContent`;


    // ==================================================
    // CONSULTAR GEMINI
    // ==================================================

    console.log(
      "[GEMINI] Iniciando geração:",
      word
    );

    const upstream = await fetch(endpoint, {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

        "x-goog-api-key": apiKey

      },

      body: JSON.stringify({

        contents: [

          {
            role: "user",

            parts: [
              { text: prompt }
            ]
          }

        ],

        generationConfig: {

          responseMimeType: "application/json",

          temperature: 0.35,

          maxOutputTokens: 650

        }

      }),

      signal: AbortSignal.timeout(60000)

    });


    // ==================================================
    // TRATAR ERROS HTTP
    // ==================================================

    if (!upstream.ok) {

      const errorBody = await upstream.text();

      console.error(
        "[GEMINI] HTTP:",
        upstream.status
      );

      console.error(
        "[GEMINI] Detalhes:",
        errorBody.slice(0, 1500)
      );

      if (upstream.status === 429) {

        return res.status(429).json({
          error:
            "Limite de requisições do Gemini atingido."
        });

      }

      if (upstream.status === 404) {

        return res.status(502).json({
          error:
            "Modelo Gemini não encontrado ou indisponível.",
          model: MODEL
        });

      }

      return res.status(502).json({
        error:
          "Falha na comunicação com o Gemini.",
        upstreamStatus: upstream.status
      });

    }


    // ==================================================
    // LER RESPOSTA DO GEMINI
    // ==================================================

    const data = await upstream.json();

    const raw = data?.candidates?.[0]?.content?.parts
      ?.map(function (part) {
        return part.text || "";
      })
      .join("");


    // ==================================================
    // VALIDAR CONTEÚDO
    // ==================================================

    if (!raw) {

      throw new Error(
        "Gemini retornou resposta sem conteúdo."
      );

    }


    // ==================================================
    // CONVERTER JSON
    // ==================================================

    const parsed = JSON.parse(raw);

    const examples = parsed?.examples;

    if (
      !Array.isArray(examples) ||
      examples.length !== 3
    ) {

      throw new Error(
        "Quantidade de exemplos inválida."
      );

    }


    // ==================================================
    // VALIDAR EXEMPLOS B1 / B2 / C1
    // ==================================================

    const normalized = LEVELS.map(function (level) {

      const found = examples.find(function (example) {

        return example?.level === level;

      });

      const sentence =
        typeof found?.text === "string"
          ? found.text.trim()
          : "";

      if (
        !sentence ||
        sentence.length > 400 ||
        !sentence.toLowerCase().includes(
          word.toLowerCase()
        )
      ) {

        throw new Error(
          `Exemplo ${level} inválido.`
        );

      }

      return {
        level: level,
        text: sentence
      };

    });


    // ==================================================
    // RETORNAR EXEMPLOS
    // ==================================================

    console.log(
      "[GEMINI] Exemplos gerados:",
      word
    );

    return res.status(200).json({

      word: word,

      examples: normalized,

      source: "gemini",

      model: MODEL

    });

// ======================================================
// TRATAMENTO DE EXCEÇÕES
// ======================================================

} catch (error) {

  console.error(
    "[GEMINI] Falha:",
    error.message
  );

  console.error(
    "[GEMINI] Tipo do erro:",
    error.name
  );

  if (
    error.name === "TimeoutError" ||
    error.name === "AbortError"
  ) {

    return res.status(504).json({
      error:
        "O Gemini demorou mais que o tempo permitido para responder."
    });

  }

  return res.status(502).json({
    error:
      "Não foi possível gerar os exemplos no momento."
  });

}

};

