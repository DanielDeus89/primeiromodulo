// ======================================================
// EXEMPLOS AUTOMÁTICOS - CACHE LOCAL
// ======================================================

const EXAMPLE_CACHE_VERSION = "v1";
const EXAMPLE_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const exampleRequests = new Map();

function getExamplesCacheKey(word, definition = "") {
  return `english-examples:${EXAMPLE_CACHE_VERSION}:${word.trim().toLowerCase()}:${definition.trim().toLowerCase()}`;
}

async function fetchAutomaticVocabularyExamples(word, definition = "") {
  const key = getExamplesCacheKey(word, definition);

  try {
    const stored = JSON.parse(localStorage.getItem(key) || "null");
    if (stored && Date.now() - stored.savedAt < EXAMPLE_CACHE_TTL_MS &&
        Array.isArray(stored.examples) && stored.examples.length === 3) {
      return stored.examples;
    }
  } catch (error) {
    console.warn("Cache indisponível:", error);
  }

  if (exampleRequests.has(key)) return exampleRequests.get(key);

  const pending = (async () => {
    const response = await fetch("/api/examples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word, definition })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    if (!Array.isArray(data.examples) || data.examples.length !== 3) {
      throw new Error("Exemplos recebidos em formato inválido.");
    }

    try {
      localStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), examples: data.examples }));
    } catch (error) {
      console.warn("Não foi possível salvar cache:", error);
    }

    return data.examples;
  })();

  exampleRequests.set(key, pending);
  try {
    return await pending;
  } finally {
    exampleRequests.delete(key);
  }
}
