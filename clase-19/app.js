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

    tarjeta.appendChild(titulo)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonEliminar)

    listaDeVideojuegos.appendChild(tarjeta)
  })
}

mostrarVideojuegos()
actualizarContador()


