const nombre = "Gabriel"

const producto1 = "Arroz"
const precio1 = 1400
const cantidad1 = 2
const subtotal1 = precio1 * cantidad1

const producto2 = "Harina"
const precio2 = 900
const cantidad2 = 4
const subtotal2 = precio2 * cantidad2

const producto3 = "Azucar"
const precio3 = 1300
const cantidad3 = 1
const subtotal3 = precio3 * cantidad3

const total = subtotal1 + subtotal2 + subtotal3
const descuento = total * 0.1
const totalConDescuento = total - descuento

console.log(`Nombre del producto 1: ${producto1}`)
console.log(`Precio del producto 1: $${precio1}`)

console.log(`El total equivale a: $${total}`)
// back sticks (ctrl + 96)
console.log(`El total con descuento equivale a: $${totalConDescuento}`)