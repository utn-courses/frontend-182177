let videojuegos = [
  {
    id: 1,
    nombre: "Minecraft",
    genero: "Sandbox",
    precio: 25000
  },
  {
    id: 2,
    nombre: "God of War",
    genero: "Acción",
    precio: 35000
  },
  {
    id: 3,
    nombre: "FIFA 25",
    genero: "Deportes",
    precio: 45000
  }
]

const formulario = document.querySelector("#formulario")

const nombre = document.querySelector("#nombre")
const genero = document.querySelector("#genero")
const precio = document.querySelector("#precio")

const contador = document.querySelector("#contador")
const listaDeVideojuegos = document.querySelector("#listaVideojuegos")

const actualizarContador = () => {
  contador.textContent = `Total de videojuegos: ${videojuegos.length}`
}

const mostrarVideojuegos = () => {
  listaDeVideojuegos.innerHTML = ""

  if (videojuegos.length === 0) {
    listaDeVideojuegos.innerHTML = "<p id='mensaje'>No hay videojuegos registrados.</p>"
  }

  videojuegos.forEach((videojuego) => {
    const tarjeta = document.createElement("article")
    tarjeta.classList.add("card")

    const titulo = document.createElement("h3")
    titulo.textContent = videojuego.nombre

    const genero = document.createElement("p")
    genero.textContent = `Género: ${videojuego.genero}`

    const precio = document.createElement("p")
    precio.textContent = `Precio: $${videojuego.precio}`

    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"

    botonEliminar.addEventListener("click", () => {
      eliminarVideojuego(videojuego.id)
    })

    tarjeta.appendChild(titulo)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonEliminar)

    listaDeVideojuegos.appendChild(tarjeta)
  })
}

const eliminarVideojuego = (id) => {
  // Método para encontrar la posición de un elemento en el array?
  const indice = videojuegos.findIndex((videojuego) => videojuego.id === id)
  videojuegos.splice(indice, 1)
  actualizarContador()
  mostrarVideojuegos()
}

const agregarVideojuego = (evento) => {
  // Evitar el comportamiento por defecto del formulario
  evento.preventDefault()

  const valorNombre = nombre.value
  const valorGenero = genero.value
  const valorPrecio = precio.value

  // VALIDACIONES
  if (valorNombre.length < 4) {
    alert("El nombre del juego debe tener al menos 4 letras")
    return
  }

  const nuevoVideojuego = {}

  nuevoVideojuego.id = videojuegos.length + 1
  nuevoVideojuego.nombre = valorNombre
  nuevoVideojuego.genero = valorGenero
  nuevoVideojuego.precio = valorPrecio

  videojuegos.push(nuevoVideojuego)

  mostrarVideojuegos()
  actualizarContador()

  formulario.reset()
}

formulario.addEventListener("submit", agregarVideojuego)

actualizarContador()
mostrarVideojuegos()


