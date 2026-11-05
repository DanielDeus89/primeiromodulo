// ======================================================
// vocabulary.js
// ======================================================
//
// RESPONSABILIDADE:
//
// - Buscar definição online
// - Buscar classe gramatical
// - Buscar pronúncia quando disponível
// - Buscar exemplo quando disponível
// - Fazer cache local
//
// NÃO CUIDA DA INTERFACE.
// A INTERFACE SERÁ FEITA DEPOIS NO card.js.
//
// ======================================================


// ======================================================
// CONFIGURAÇÃO
// ======================================================

const VOCABULARY_API_BASE =
  "/api/dictionary?word=";


// Tempo de cache:
//
// 30 dias
//
const VOCABULARY_CACHE_TIME =
  30 *
  24 *
  60 *
  60 *
  1000;



// ======================================================
// NORMALIZAR PALAVRA
// ======================================================

function normalizeVocabularyWord(
  word
) {

  return String(
    word || ""
  )
    .trim()
    .toLowerCase();

}



// ======================================================
// CHAVE DO CACHE
// ======================================================

function getVocabularyCacheKey(
  word
) {

  const normalized =
    normalizeVocabularyWord(
      word
    );


  return (
    `vocabularyDefinition_${normalized}`
  );

}



// ======================================================
// LER CACHE
// ======================================================

function getVocabularyFromCache(
  word
) {

  try {

    const key =
      getVocabularyCacheKey(
        word
      );


    const raw =
      localStorage.getItem(
        key
      );


    if (!raw) {

      return null;

    }


    const cached =
      JSON.parse(
        raw
      );


    if (!cached) {

      return null;

    }


    if (
      typeof cached.savedAt !==
        "number"
    ) {

      return null;

    }


    const age =
      Date.now() -
      cached.savedAt;


    // ====================================================
    // CACHE EXPIRADO
    // ====================================================

    if (
      age >
      VOCABULARY_CACHE_TIME
    ) {

      localStorage.removeItem(
        key
      );


      return null;

    }


    return cached.data || null;

  }


  catch (error) {

    console.warn(
      "Erro ao ler cache de vocabulário:",
      error
    );


    return null;

  }

}



// ======================================================
// SALVAR CACHE
// ======================================================

function saveVocabularyToCache(
  word,
  data
) {

  try {

    const key =
      getVocabularyCacheKey(
        word
      );


    const cacheData = {

      savedAt:
        Date.now(),

      data:
        data

    };


    localStorage.setItem(
      key,
      JSON.stringify(
        cacheData
      )
    );

  }


  catch (error) {

    console.warn(
      "Erro ao salvar cache de vocabulário:",
      error
    );

  }

}



// ======================================================
// BUSCAR DEFINIÇÃO ONLINE
// ======================================================

async function fetchVocabularyDefinition(
  word
) {

  const normalized =
    normalizeVocabularyWord(
      word
    );


  if (!normalized) {

    throw new Error(
      "Palavra inválida."
    );

  }


  // ====================================================
  // CACHE
  // ====================================================

  const cached =
    getVocabularyFromCache(
      normalized
    );


  if (cached) {

    console.log(
      "Vocabulário carregado do cache:",
      normalized
    );


    return cached;

  }



  // ====================================================
  // NOSSA API
  // ====================================================

  const url =
    `/api/dictionary?word=${encodeURIComponent(normalized)}`;


  console.log(
    "Buscando definição:",
    normalized
  );


  const response =
    await fetch(
      url
    );


  const data =
    await response.json();


  if (
    !response.ok
  ) {

    throw new Error(
      data.error ||
      `Definição não encontrada para "${normalized}".`
    );

  }



  // ====================================================
  // SALVAR CACHE
  // ====================================================

  saveVocabularyToCache(
    normalized,
    data
  );


  return data;

}





// ======================================================
// LIMPAR CACHE DE UMA PALAVRA
// ======================================================

function clearVocabularyCache(
  word
) {

  const key =
    getVocabularyCacheKey(
      word
    );


  localStorage.removeItem(
    key
  );

}



// ======================================================
// TESTE / DEBUG
// ======================================================

async function testVocabulary(
  word
) {

  try {

    const result =
      await fetchVocabularyDefinition(
        word
      );


    console.log(
      "Resultado do vocabulário:",
      result
    );


    return result;

  }


  catch (error) {

    console.error(
      "Erro no teste de vocabulário:",
      error
    );


    return null;

  }

}