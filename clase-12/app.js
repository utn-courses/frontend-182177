// Comentario en una sola lina

/* Comentario que
permite el
salto de linea */

// Datos
123456789
"Gabriel"

// Variables
// Palabra reservada
// var let const
let edad = 32
const nombre = "Gabriel"

console.log(nombre)
console.log(edad)

edad = 33

console.log(edad)

const dni = 123456789

// dni = 1

let gustoFavorito
console.log(gustoFavorito)
gustoFavorito = "ddl"
console.log(gustoFavorito)

// is not defined es diferente a undefined
// console.log(mascotas)


const miComidaFavorita = "ravioles" // cammelcase
const CONTRASEÑA = 1234 // uppercase (credencial)
const Mascota = {} // pascalcase (modelos)

// Tipos de datos

// Texto (cadena de caracteres)
// caracol
// pepe123
// +54123456789

// string
const animal = "caracol"
const tel = "+54123456789"

// back stick alt + 96
const pass = "pepe123"

// interpolar
let mensaje = `Mi contraseña es ${pass}`
console.log(mensaje)

// numeros
let ahorro = 0
let deuda = -4000
let precio = 1234

// Mostrando datos
console.log(ahorro + 1000)
console.log(deuda + 4000)

// reasignación
deuda = deuda + 4000
console.log(deuda)

// Operadores
// Aritmeticos
// + - / * **
console.log("--------------")
console.log(1 + 1)
console.log(1 - 1)
console.log(10 / 2)
console.log(2 * 2)
console.log(2 ** 2)

// Operadores de comparación
// SIEMPRE me devuelven un valor lógico (true / false)

console.log("---------------")
console.log(1 > 10)
console.log(10 < 100)
console.log(1 <= 1)
console.log(1 >= 1)

// Comparación estricta (compara tipo)
console.log("1" !== 1)
// Comparación de valor
console.log("1" != 1)

// compara igualdad
console.log(1 === 1)
console.log("1" === 1)

const passGuardada = "pepe123"
const passUsuario = "pepe123"

console.log(passGuardada === passUsuario)