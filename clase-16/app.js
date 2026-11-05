const datosPrimitivos = [1, "hola", true, undefined, null, NaN]

// Datos complejos
// {} []

const persona = {
  nombre: "Luis",
  apellido: "Ramos",
  edad: 34,
  mascotas: 3,
  direccion: {
    calle: "San Juan",
    ciudad: "San Justo",
    cp: 2222,
    n: 1111
  },
  juegosFav: ["League of Legends", "Fornite", "Ajedrez"]
}

console.log(`El juego favorito de ${persona.nombre} es ${persona.juegosFav[0]}`)

const rick = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
}

console.log(rick[2])

const productos = [
  "Notebook",
  "Celular",
  "Tablet"
]

console.log(productos[0])
console.log(productos[1])
console.log(productos[2])
console.log(productos[3])
console.log(productos[111]) // undefined

console.log(productos.length)

// Un método es una función SOBRE un objeto
// Agregar al final
productos.push("Plato")
console.log(productos)

// reasignación
// productos = 1

// Agregar al comienzo
productos.unshift("Jarra")
console.log(productos)

// Elimar último
productos.pop()
console.log(productos)

// Borrar el primero
productos.shift()
console.log(productos)

// Elimino un elemento "x"
productos.splice(1, 1, "Pantalla")
console.log(productos)

// Métodos que funcinan como bucles
productos.forEach((producto, posicion) => {
  console.log(`El ${posicion + 1}° producto es: ${producto}`)
})

const precios = [1345, 1643, 2342]

// Un mappeo de datos
// map → convertir cada elemento en otra cosa
// los resultados los guarda en un array nuevo
const preciosConInflacion = precios.map((precio) => {
  // en que queres converir a cada elemento?
  const precioActual = precio * 1.1

  return {
    actualizacion: precioActual
  }
})

console.log(preciosConInflacion)

const productosNuevos = [
  { id: 1, nombre: "Teclado", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 8000 },
  { id: 3, nombre: "Monitor", precio: 120000 },
  { id: 12, nombre: "Billetera", precio: 12 },
]

// let productoEncontrado

// productosNuevos.forEach((producto) => {
//   if (producto.id === 3) {
//     productoEncontrado = producto
//   }
// })

// console.log(productoEncontrado)

// los métodos de js abstraen la lógica
const productoEncontrado = productosNuevos.find((producto) => producto.id === 12)
console.log(productoEncontrado)

const productosCaros = productosNuevos.filter((producto) => producto.precio > 6000)
console.log(productosCaros)

// .sort()
// .every()
// .some()

const test = [1, 2, 3]

console.log(test.reverse())

const nombre = "gabriel"

console.log(nombre.toUpperCase())