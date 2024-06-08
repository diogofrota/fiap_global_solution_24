const link = document.querySelector(".link_pagina");

link.addEventListener("click", (event) => {
  event.preventDefault();

  const href = link.getAttribute("href").replace("#", "");
  const sectionGrupo = document.getElementById(href);

  scrollTo({
    behavior: "smooth",
    top: sectionGrupo.offsetTop,
  });
});