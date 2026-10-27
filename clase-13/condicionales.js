// Condicionales

// if (condicion) {
//   // Código que se ejecuta si la condición es verdadera
// }

const edad = 20

// Crea un sistema que habilite el paso a mayores de 18
// llaves → scope → alcance
// if (edad >= 18) {
//   console.log("Puedes ingresar")
// } else {
//   console.log("No puedes ingresar, eres menor de edad")
// }

// Operador ternario
// condición ? verdadero : falso
// edad >= 18 ? console.log("Ingresa") : console.log("No ingresa")

// Crea un sistema que deje ingresar personas con una altura > 1.5m, pero también pueden ingresar si estan acompañadas

const alturaPersona = 1.3
const estaAcompañada = true
const amigoDelDueño = true

if (alturaPersona > 1.5) {
  console.log(`Puedes ingresar, superas el mínimo: ${alturaPersona}m`)
} else if (estaAcompañada) {
  console.log("Puedes ingresar, estas acompañada por un adulto")
} else if (amigoDelDueño) {
  console.log("Pasa pero sh")
} else {
  console.log("No puedes ingresar, no cumplis con los requisitos")
}

// operadores lógicos → permites multiples condiciones
// && || !
// cumplis con la altura mínima o estás acompañada?
// ||
if (alturaPersona > 1.5 || estaAcompañada) {
  console.log("Cumplis los requisitos, adelante")
} else {
  console.log("No puedes ingresar, no cumplis con los requisitos")
}