// ======================================================
// CONFIGURAÇÃO GLOBAL DOS MÓDULOS
// ======================================================

const MODULES = [

  {
    id: 1,
    title: "Módulo 01",
    startLesson: 1,
    endLesson: 60
  },

  {
    id: 2,
    title: "Módulo 02",
    startLesson: 61,
    endLesson: 120
  },

  {
    id: 3,
    title: "Módulo 03",
    startLesson: 121,
    endLesson: 180
  },

  {
    id: 4,
    title: "Módulo 04",
    startLesson: 181,
    endLesson: 240
  },

  {
    id: 5,
    title: "Módulo 05",
    startLesson: 241,
    endLesson: 300
  },

  {
    id: 6,
    title: "Módulo 06",
    startLesson: 301,
    endLesson: 360
  }

];


// ======================================================
// IDENTIFICAR MÓDULO PELA AULA
// ======================================================

function getModuleByLesson(lessonNumber) {

  const lesson = Number(lessonNumber);

  return MODULES.find(
    module =>
      lesson >= module.startLesson &&
      lesson <= module.endLesson
  ) || null;

}


// ======================================================
// IDENTIFICAR MÓDULO PELO ID
// ======================================================

function getModuleById(moduleId) {

  return MODULES.find(
    module =>
      module.id === Number(moduleId)
  ) || null;

}


// ======================================================
// OBTER AULAS DE UM MÓDULO
// ======================================================

function getModuleLessons(moduleId) {

  const module = getModuleById(moduleId);

  if (!module) {
    return [];
  }

  const lessons = [];

  for (
    let lesson = module.startLesson;
    lesson <= module.endLesson;
    lesson++
  ) {

    lessons.push(lesson);

  }

  return lessons;

}