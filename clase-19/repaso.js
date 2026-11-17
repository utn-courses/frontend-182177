const parrafo = document.querySelector("p")
const textoDestacado = document.createElement("strong")
const boton = document.querySelector("button")

parrafo.textContent = ""
parrafo.appendChild(textoDestacado)
textoDestacado.textContent = "Me llamo Gabriel"

// Eventos
// aquello que hace el usuario
// boton.addEventListener(evento, que es lo que tiene que hacer)

boton.addEventListener("click", () => {
  if (textoDestacado.classList.contains("importante")) {
    textoDestacado.classList.remove("importante")
  } else {
    textoDestacado.classList.add("importante")
  }
})