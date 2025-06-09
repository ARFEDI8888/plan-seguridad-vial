

document.addEventListener("DOMContentLoaded", () => {
  // Carrusel de imágenes
  const contenedorCarrusel = document.getElementById("contenedor-carrusel");
  const btnIzquierda = document.getElementById("flecha-izq");
  const btnDerecha = document.getElementById("flecha-der");

  btnIzquierda.addEventListener("click", () => {
    contenedorCarrusel.scrollBy({ left: -160, behavior: "smooth" });
  });

  btnDerecha.addEventListener("click", () => {
    contenedorCarrusel.scrollBy({ left: 160, behavior: "smooth" });
  });

  // Texto paginado
  const paginas = document.querySelectorAll("#texto-carrusel .pagina");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  let paginaActual = 0;

  function mostrarPagina(index) {
    paginas.forEach((pagina, i) => {
      pagina.classList.toggle("activo", i === index);
    });
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === paginas.length - 1;
  }

  btnPrev.addEventListener("click", () => {
    if (paginaActual > 0) {
      paginaActual--;
      mostrarPagina(paginaActual);
    }
  });

  btnNext.addEventListener("click", () => {
    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      mostrarPagina(paginaActual);
    }
  });

  mostrarPagina(paginaActual);

  // Botón Contáctenos - scroll suave
  const btnContacto = document.getElementById("btn-contacto");
  btnContacto.addEventListener("click", () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });
});