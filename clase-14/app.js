const ahorro = 0

// condicional con if
// if (ahorro > 0) {
//   console.log("Tienes ahorros")
// } else {
//   console.log("No tienes ahorros")
// }

// operador ternario
// condición ? resolución verdadera : resolución falsa
// ahorro > 0
//   ? console.log("Tienes ahorros")
//   : console.log("No tienes ahorros")


// bucles → estructura de control
// for (inicio; condición; actualización) {}
// maquina lógica
// for (let inicio = 1; inicio <= 300; inicio = inicio + 1) {
//   console.log(`Voy en la vuelta ${inicio}`)
// }

console.log("Hola, bienvenido a la clase de Javascript")
console.log("Hola, bienvenido a la clase de Javascript")

// Hacer una torta
// paso 1: elegir que hacer
// paso 2: comprar los ingredientes
// paso 3: precalentar el horno
// paso 4: comenzar con la receta

console.log("paso 1: elegir que hacer")
console.log("paso 2: comprar los ingredientes")
console.log("paso 3: precalentar el horno")
console.log("paso 4: comenzar con la receta")

console.log("paso 1: elegir que hacer")
console.log("paso 2: comprar los ingredientes")
console.log("paso 3: precalentar el horno")
console.log("paso 4: comenzar con la receta")

console.log("paso 1: elegir que hacer")
console.log("paso 2: comprar los ingredientes")
console.log("paso 3: precalentar el horno")
console.log("paso 4: comenzar con la receta")

console.log("paso 1: elegir que hacer")
console.log("paso 2: comprar los ingredientes")
console.log("paso 3: precalentar el horno")
console.log("paso 4: comenzar con la receta")

// funciones
// Una función es un bloque de código que podemos reutilizar para realizar una tarea específica. En lugar de escribir las mismas instrucciones varias veces, las agrupamos y las ejecutamos cuando las necesitamos

// declaración de función
// invocación de función

// saludar a una persona
function saludar() {
  console.log("Hola, cómo estás?")
}

saludar()

// abstrae lógica
// reutiliza lógica
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()

// comer
// PARAMETROS → SE DEFINEN EN LA DECLARACIÓN
function comer(dia, comida) {
  if (comida) {
    console.log(`Hoy es ${dia} y estoy por comer ${comida}`)
  } else {
    console.log("No puedes comer sin antes pensar qué :/")
  }
}

// ARGUMENTO → le da valor al parámetro
comer("jueves", "arroz")

// falsy y truthy
// 0 → ¿Tenes ahorros? → false
// "lasagna" → ¿Es verdad que tenes comida? → true
// ["juan", "maría", "sofía"] → Vinieron alumnos en este dia de lluvia? → true

// undefined → ¿Es verdad que hay comida? → false

function calcularPrecio(prod1, prod2) {
  if (prod1 && prod2) {
    return prod1 + prod2
  }

  console.log("Los precios son obligatorios")
}

const precioFinal = calcularPrecio(20, 2000)

console.log(precioFinal)

function aplicarCupon(precioTotal) {
  console.log(precioTotal * 0.5)
}


function calcularPromedio(n1, n2, n3) {
  const sumaDeNotas = n1 + n2 + n3
  const promedio = sumaDeNotas / 3
  return promedio
}

const promedioDeNotas = calcularPromedio(1, 1, 10)

// crear un programa que muestre en la consola si paso de año o no, el promedio debe ser mayor a 7
function mostrarResultado(promedio) {
  if (promedio >= 7) {
    console.log("Pasaste de año :)")
  } else {
    console.log("No pasaste de año :(")
  }
}

mostrarResultado(promedioDeNotas)

// pipelines
// Un pipeline (o canalización) es una secuencia de pasos interconectados donde la salida de un proceso es la entrada directa del siguiente, con el fin de automatizar y optimizar una tarea

// función declarada
function nadar() {
  console.log("Estoy nadando :)")
}

// función flecha → arrow function
const nadar2 = () => {
  console.log("Estoy nadando x2 :)")
}

nadar()
nadar2()

const nadar3 = () => console.log("Estoy nadando x3 :)")

nadar3()