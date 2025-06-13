
function filtrarGlobal(inputId) {
  const filtro = document.getElementById(inputId).value.toLowerCase();
  const details = document.querySelectorAll("details");

  details.forEach((detail) => {
    const filas = detail.querySelectorAll("tbody tr");
    const cabecera = detail.querySelector("thead");
    let coincidencias = 0;

    filas.forEach((fila) => {
      const visible = fila.textContent.toLowerCase().includes(filtro);
      fila.style.display = visible ? "" : "none";
      if (visible) coincidencias++;
    });

    if (filtro.length > 0) {
      if (coincidencias > 0) {
        detail.style.display = "";
        detail.open = true;
        cabecera.style.display = "";
      } else {
        detail.style.display = "none";
      }
    } else {
      detail.style.display = "";
      detail.open = false;
      filas.forEach(f => f.style.display = "");
      if (cabecera) cabecera.style.display = "";
    }
  });
}
