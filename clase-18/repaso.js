const videojuego = {
  id: 1,
  nombre: "Minecraft",
  genero: "Sandbox",
  precio: 25000,
  disponible: true
}

// Lectura de prodiedades
console.log(videojuego.nombre)
const nombrePropiedad = "id"
console.log(videojuego[nombrePropiedad])

// Creación de propiedad nueva
videojuego.dificultad = 7
console.log(videojuego)

// Actividad rápida
// Crear un objeto animal que tenga:
// - nombre
// - especie
// - edad
// - vacunado

const animales = [
  {
    nombre: "Arandela",
    especie: "perro",
    edad: 8,
    vacunado: true
  },
  {
    nombre: "Peperina",
    especie: "gato",
    edad: 2,
    vacunado: false
  },
  {
    nombre: "Tuerca",
    especie: "gato",
    edad: 1,
    vacunado: false
  }
]

// Acceder a elementos de un array
console.log(animales[1])
console.log(animales.at(2))
console.log(animales[2].edad)

// Métodos de array
// funciones que reservan una acción especifica
// forEach → undefined
// find → un elemento o undefined
// filter → un array nuevo con elementos filtrados
// map → un array nuevo con transformaciones de cada elemento

// Mostrar en consola los nombres de los animales

animales.forEach((animal) => {
  console.log(animal.nombre)
})

// Busca el animal que coincida con la especie gato
const animalEncontrado = animales.find((animal) => animal.especie === "gato")
console.log(animalEncontrado)

// Encontrar los animales que en su nombre incluyan la "t"
const animalesFiltrados = animales.filter((animal) => {
  return animal.nombre.toLowerCase().includes("tu")
})
console.log(animalesFiltrados)

// Un nuevo array con solo los nombres en mayus de las mascotas
// Crear un ID particular para cada moscota con esta estructura: ARANDELA-453, TUERCA-871, PEPERINA-778
// ["ARANDELA", "PEPERINA", "TUERCA"]

const nombres = animales.map((animal, indice) => {
  const nombre = animal.nombre.toUpperCase()
  const nRandom = Math.floor((Math.random() * 900) + 100)
  // return `${nombre}-${indice + 1}`
  return `${nombre}-${nRandom}`
})

console.log(nombres)

const nombresNuevos = []

for (let index = 0; index < animales.length; index++) {
  const nombre = animales[index].nombre.toUpperCase()
  const nRandom = Math.floor((Math.random() * 900) + 100)
  const resultado = `${nombre}-${nRandom}`
  nombresNuevos.push(resultado)
}

console.log(nombresNuevos)