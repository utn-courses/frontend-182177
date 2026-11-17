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

    const titulo = document.createElement("h2")
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

mostrarVideojuegos()
actualizarContador()

