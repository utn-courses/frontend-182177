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

console.log("==== INFORMACIÓN DE JUEGOS ====")
const juego1 = videojuegos[0]
console.log(`Nombre del juego 1: ${juego1.nombre}`)

const juego2 = videojuegos[1]
console.log(`Precio del juego 2: $${juego2.precio}`)

console.log(`Genero del juego 3: ${videojuegos[2].genero}`)

console.log("==== MODIFICACIÓN DE JUEGOS ====")
juego1.precio = 30000
console.log(`Precio actualizado juego 1: $${juego1.precio}`)

juego2.disponible = false
// Mostra "Disponible" o "No disponible" según corresponda
if (juego2.disponible) {
  console.log("Juego 2 disponible")
} else {
  console.log("Juego 2 no disponible")
}

// operador ternario
// condición ? caso positivo : caso negativo
juego2.disponible ? console.log("Juego 2 disponible") : console.log("Juego 2 no disponible")

const juego4 = {
  id: 4,
  nombre: "Call Of Duty",
  genero: "FPS",
  precio: 50000,
  disponible: true
}

console.log("==== PUSH Y POP EN VIDEOJUEGOS ====")
videojuegos.push(juego4)
videojuegos.pop()
console.log(videojuegos)

console.log("==== VIDEOJUEGOS DATA ====")
videojuegos.forEach((videojuego) => {
  console.log(`Nombre: ${videojuego.nombre}`)
  console.log(`Género: ${videojuego.genero}`)
  console.log(`Precio: ${videojuego.precio}`)
})

const numeros = [1, 2, 3]

const dobles = numeros.map((numero) => {
  return numero * 2
})

const filtrados = numeros.filter((numero) => {
  if (numero < 3) {
    return numero
  }
})

// cuando la función flecha tiene una sola linea de codigo y se retorna puedo hacer un return explisito
const filtrados2 = numeros.filter((numero) => numero < 3)

console.log("==== VIDEOJUEGOS CAROS ====")
const juegosCaros = videojuegos.filter((juego) => {
  if (juego.precio > 30000) {
    return juego
  }
})

const juegosCaros2 = videojuegos.filter((juego) => {
  return juego.precio > 30000
})

const juegosCaros3 = videojuegos.filter((juego) => juego.precio > 30000)

console.log(juegosCaros)

console.log("==== VIDEOJUEGO ENCONTRADO ====")

const helados = ["Frutilla", "Vainilla", "Durazno"]

// Encuentra el primer helado que empiece con D
// string → dulce de leche

const primerHeladoConD = helados.find((helado) => {
  if (helado.startsWith("D")) {
    return helado
  }
})

console.log(primerHeladoConD)

const pares = [2, 4, 6, 8, 20]

// Encuentra el primer número mayor a 8
// number → 20

// find → retorna el primer elemento que encuentra → el tipo de dato lo define este primer elemento

const juegoEncontrado = videojuegos.find((juego) => {
  if (juego.id === 3) {
    return juego
  }
})

console.log(juegoEncontrado)

const buscarVideojuego = (nombre) => {
  const juegoEncontrado = videojuegos.find((juego) => juego.nombre === nombre)
  return juegoEncontrado ? juegoEncontrado : null
}

console.log(buscarVideojuego("Lalala"))

