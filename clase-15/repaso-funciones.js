
// declaración: enseñarle a la pc COMO se hace
// scope → zona privada
// parametros → variables que se declaran para que la función utilice: NO CONTIENEN DATOS
function cantar(oracion, tono) {
  console.log(`Voy a cantar: ${oracion}, en tono ${tono}.`)
}

let dato = 1
console.log(dato)

// invocación
// argumentos → datos para los parámetros
cantar("Me gusta el ddl", "suave")
cantar("Aguanta el mate", "fuerte")

// Calcular area de triangulo
// base * altura / 2

// arrow function
const multiplicar = (base, altura) => {
  const resultado = base * altura
  return resultado
}

const calcularArea = (base, altura) => {
  console.log(multiplicar(base, altura) / 2)
}

// pipeline
// multiplicar → potenciar 
calcularArea(3, 4)