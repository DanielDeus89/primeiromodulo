// ======================================================
// api/dictionary.js
// ======================================================
//
// DEFINIÇÃO:
// Datamuse
//
// EXEMPLOS:
// Tatoeba
//
// ======================================================


export default async function handler(
  request,
  response
) {


  // ====================================================
  // PEGAR PALAVRA
  // ====================================================

  const word =
    String(
      request.query.word || ""
    )
      .trim()
      .toLowerCase();



  // ====================================================
  // VALIDAR
  // ====================================================

  if (!word) {

    return response
      .status(400)
      .json(
        {

          error:
            "Word is required."

        }
      );

  }



  try {


    // ==================================================
    // DATAMUSE
    // ==================================================

    const dictionaryUrl =
      `https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=dp&max=1`;



    console.log(
      "Consultando Datamuse:",
      dictionaryUrl
    );



    const dictionaryResponse =
      await fetch(
        dictionaryUrl
      );



    if (
      !dictionaryResponse.ok
    ) {

      return response
        .status(502)
        .json(
          {

            error:
              "Dictionary external request failed.",

            word:
              word,

            externalStatus:
              dictionaryResponse.status

          }
        );

    }



    const dictionaryData =
      await dictionaryResponse.json();



    // ==================================================
    // VERIFICAR RESULTADO
    // ==================================================

    if (
      !Array.isArray(
        dictionaryData
      ) ||
      dictionaryData.length ===
        0
    ) {

      return response
        .status(404)
        .json(
          {

            error:
              "Definition not found.",

            word:
              word

          }
        );

    }



    const result =
      dictionaryData[0];



    // ==================================================
    // PROCESSAR DEFINIÇÕES
    // ==================================================

    let definitions =
      [];


    if (
      Array.isArray(
        result.defs
      )
    ) {

      definitions =
        result.defs.map(
          function (
            item
          ) {


            const parts =
              String(
                item
              ).split(
                "\t"
              );


            return {

              partOfSpeech:
                parts[0] || "",

              definition:
                parts
                  .slice(
                    1
                  )
                  .join(
                    " "
                  )
                  .trim()

            };

          }
        );

    }



    // ==================================================
    // PRIMEIRA DEFINIÇÃO
    // ==================================================

    const firstDefinition =
      definitions.length >
        0
        ? definitions[0]
        : null;



    // ==================================================
    // BUSCAR EXEMPLOS NO TATOEBA
    // ==================================================

    let examples =
      [];


    try {


      const examplesUrl =
        `https://api.tatoeba.org/v1/sentences?q=${encodeURIComponent(word)}&lang=eng&limit=10`;



      console.log(
        "Consultando Tatoeba:",
        examplesUrl
      );



      const examplesResponse =
        await fetch(
          examplesUrl
        );



      if (
        examplesResponse.ok
      ) {


        const examplesData =
          await examplesResponse.json();



        // =================================================
        // TATOEBA PODE RETORNAR:
        //
        // data: [...]
        //
        // OU ARRAY DIRETO,
        // DEPENDENDO DA VERSÃO/RESPOSTA.
        // =================================================

        let sentenceList =
          [];


        if (
          Array.isArray(
            examplesData
          )
        ) {

          sentenceList =
            examplesData;

        }


        else if (
          examplesData &&
          Array.isArray(
            examplesData.data
          )
        ) {

          sentenceList =
            examplesData.data;

        }


        else if (
          examplesData &&
          Array.isArray(
            examplesData.results
          )
        ) {

          sentenceList =
            examplesData.results;

        }



        // =================================================
        // PEGAR TEXTO
        // =================================================

        examples =
          sentenceList
            .map(
              function (
                item
              ) {


                if (
                  typeof item ===
                    "string"
                ) {

                  return item;

                }


                if (
                  item &&
                  typeof item.text ===
                    "string"
                ) {

                  return item.text;

                }


                if (
                  item &&
                  typeof item.sentence ===
                    "string"
                ) {

                  return item.sentence;

                }


                return "";

              }
            )
            .filter(
              function (
                text
              ) {


                return (
                  text &&
                  text
                    .toLowerCase()
                    .includes(
                      word
                    )
                );

              }
            )
            .slice(
              0,
              3
            );

      }


      else {


        console.warn(
          "Tatoeba retornou:",
          examplesResponse.status
        );

      }

    }


    catch (
      exampleError
    ) {


      console.warn(
        "Erro ao buscar exemplos:",
        exampleError
      );


      // =================================================
      // IMPORTANTE:
      //
      // A DEFINIÇÃO CONTINUA FUNCIONANDO
      // MESMO SE TATOEBA FALHAR.
      // =================================================

      examples =
        [];

    }



    // ==================================================
    // RESPOSTA FINAL
    // ==================================================

    return response
      .status(200)
      .json(
        {

          word:
            result.word || word,

          partOfSpeech:
            firstDefinition
              ? firstDefinition.partOfSpeech
              : "",

          definition:
            firstDefinition
              ? firstDefinition.definition
              : "",

          definitions:
            definitions,

          examples:
            examples,

          pronunciation:
            "",

          audio:
            "",

          source:
            {

              definition:
                "datamuse",

              examples:
                "tatoeba"

            },

          fetchedAt:
            Date.now()

        }
      );

  }



  catch (
    error
  ) {


    console.error(
      "Dictionary error:",
      error
    );



    return response
      .status(500)
      .json(
        {

          error:
            "Dictionary service unavailable.",

          details:
            String(
              error.message ||
              error
            )

        }
      );

  }

}