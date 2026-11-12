// DOM → document object model
const titulo = document.querySelector("#titulo")
const desripcion = document.querySelector(".descripcion")
const boton = document.querySelector("button")
const body = document.querySelector("body")

desripcion.textContent = "Nueva descripción"

boton.innerHTML = "<strong>Haz click</strong>"

boton.style.color = "blue"
boton.style.backgroundColor = "lightblue"
boton.style.fontSize = "32px"


// evento !== método
// evento es lo que puede hacer el usuario en la web
// metodo es una acción que hace algo en especifico
boton.addEventListener("click", () => {
  body.classList.toggle("dark")
  titulo.textContent = "Ganaste!!!!"
})

