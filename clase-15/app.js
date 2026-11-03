// objetos
// arrays
// métodos

// describir un objeto
// describir un libro
// tipoDeTapa, cantHojas, autor, género, color, ISBN

const titulo = "El nombre del viento"
const autor = "Patrick Rothfuss"
const año = 2007
const paginas = 800
const disponible = true

console.log(titulo)
console.log(año)

console.log(`El libro: ${titulo}, tiene ${paginas} paginas.`)

// propiedades y valores
// key → values
const libro1 = {
  titulo: "El nombre del viento",
  autor: "Patrick Rothfuss",
  año: 2007,
  paginas: 800,
  genero: "fantasía",
  disponible: true
}

const compra = {
  valor: 1000,
  cliente: "Ariel",
  producto: "pan"
}

// Notación de punto
// Que propiedad del libro queres ver?
console.log(`El libro tiene: ${libro1.paginas} paginas.`)

// Notación de corchete
// Que propiedad del libro queres ver?
// console.log(libro1.lalala)

// const busqueda = prompt("Qué propiedad querés buscar?:")

// falsy y truthy
// if (busqueda) {
//   if (libro1[busqueda]) {
//     console.log(`El valor ${busqueda} es: ${libro1[busqueda]}`)
//   } else {
//     console.log("No existe la propiedad en el libro.")
//   }
// } else {
//   console.log("No hay dato")
// }

// Lectura de propiedad
console.log(libro1.autor)

libro1.genero = "fantasía"

console.log(libro1)

// array → lista → indexan elementos
const libros = ["El principito", "El nombre del viento", "Dune", "1984"]

console.log(libros)

// js comienza a contar el indice de un array por 0
console.log(libros[2])

// primitivos → unidad de información
// numero, strign, boolean, undefined, null

/// compuestos / complejo → objeto | array
// un conjunto de datos
// objeto → colección de datos
// array → lista de datos

const carrito = []

const producto1 = prompt("Ingrese producto 1: ")
carrito.push(producto1)

const producto2 = prompt("Ingrese producto 2: ")
carrito.push(producto2)
console.log(carrito)