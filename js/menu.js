function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function carregarAula(elemento, aula) {
  const url = `./aula/${aula}.html`;
  document.getElementById("iframeAula").src = url;

  const links = document.querySelectorAll(".sidebar a");
  links.forEach(link => link.classList.remove("active"));
  elemento.classList.add("active");

  // Fecha menu no mobile
  document.getElementById("sidebar").classList.remove("active");
}
