const parrafo = document.querySelector("p")

parrafo.textContent = "Hola :)"

parrafo.style.color = "blue"

const videojuegos = [
  {
    id: 1,
    nombre: "Minecraft",
    genero: "Sandbox",
    precio: 25000,
    disponible: true
  },
  {
    id: 2,
    nombre: "FIFA 25",
    genero: "Deportes",
    precio: 45000,
    disponible: true
  },
  {
    id: 3,
    nombre: "GTA VI",
    genero: "Acción",
    precio: 35000,
    disponible: false
  }
]

const lista = document.querySelector("ul")

videojuegos.forEach((juego) => {
  const li = `<li>${juego.nombre}</li>`
  lista.innerHTML += li
})