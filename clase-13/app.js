// bucle
// Los bucles permiten ejecutar un bloque de código varias veces sin escribir la misma instrucción repetidamente

// for → "para"
// for (inicializacion; condicion; actualizacion) {
//   // Código que se repite
// }

// for (let indice = 0; indice < 10; indice = indice + 1) {
//   console.log(`Vuelta ${indice + 200}`)
// }

// Tabla de multiplicación del 9
const limite = 10
const multiplicador = prompt("De qué número querés conocer las tablas?")

// if (multiplicador <= 10) {
//   for (let index = 0; index < limite; index++) {
//     console.log(`${index + 1}x${multiplicador}=${(index + 1) * multiplicador}`)
//   }
// } else if (multiplicador < 0) {
//   console.log("No puedes usar numeros negativos")
// } else {
//   console.log("No puedes multiplicar por números mayores a 10.")
// }


if (multiplicador < 0) {
  console.log("No puedes usar numeros negativos")
} else if (multiplicador <= 10) {
  for (let index = 0; index < limite; index++) {
    console.log(`${index + 1}x${multiplicador}=${(index + 1) * multiplicador}`)
  }
} else {
  console.log("No puedes multiplicar por números mayores a 10.")
}

