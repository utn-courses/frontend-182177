# Ejercicio práctico: Mi colección de videojuegos

**Objetivo:** trabajar con objetos, arrays y métodos de arrays en JavaScript.

Vas a desarrollar un pequeño programa para administrar una colección de videojuegos. Cada videojuego tendrá información propia y podrás realizar distintas operaciones sobre la colección.

## Paso 1 — Crear los objetos

Creá un array llamado `videojuegos` que contenga 3 objetos.

Cada videojuego debe tener las siguientes propiedades:

- `id`: número identificador.
- `nombre`: nombre del videojuego.
- `genero`: género del videojuego.
- `precio`: precio del videojuego.
- `disponible`: valor booleano que indique si está disponible.

Ejemplo de un objeto:

```js
{
  id: 1,
  nombre: "Minecraft",
  genero: "Sandbox",
  precio: 25000,
  disponible: true
}
```

## Paso 2 — Mostrar información

Utilizando `console.log()`:

1. Mostrá el nombre del primer videojuego.
2. Mostrá el precio del segundo videojuego.
3. Mostrá el género del tercer videojuego.

## Paso 3 — Modificar objetos

Realizá las siguientes modificaciones:

1. Cambiá el precio del primer videojuego.
2. Cambiá la disponibilidad del segundo videojuego a `false`.
3. Agregá una propiedad llamada `desarrolladora` al tercer videojuego.

## Paso 4 — Agregar y eliminar videojuegos

1. Creá un nuevo objeto que represente otro videojuego.
2. Agregalo al array utilizando `push()`.
3. Eliminá el último videojuego utilizando `pop()`.
4. Mostrá el array actualizado.

## Paso 5 — Recorrer el array

Utilizá `forEach()` para mostrar todos los videojuegos con el siguiente formato:

```text
Videojuego: Minecraft
Género: Sandbox
Precio: $25000
--------------------
```

## Paso 6 — Transformar información

Utilizá `map()` para crear un nuevo array que contenga únicamente los nombres de los videojuegos.

El resultado debería tener una estructura similar a esta:

```js
["Minecraft", "FIFA", "GTA V"]
```

Mostrá el nuevo array por consola.

## Paso 7 — Filtrar videojuegos

Utilizá `filter()` para crear un nuevo array que contenga únicamente los videojuegos cuyo precio sea mayor a $30000.

Mostrá el resultado.

## Paso 8 — Buscar un videojuego

Utilizá `find()` para buscar un videojuego por su `id`.

La búsqueda debe devolver el objeto completo.

Si el videojuego no existe, mostrá un mensaje indicando que no se encontró.

## Paso 9 — Calcular el precio total

Utilizá `reduce()` para calcular cuánto dinero costaría comprar todos los videojuegos de la colección.

El resultado debe ser un único número.

## Paso 10 — Desafío final

Creá una función llamada `buscarVideojuego` que reciba un nombre como parámetro.

La función debe:

1. Recibir el nombre de un videojuego.
2. Buscarlo dentro del array.
3. Devolver el objeto correspondiente.
4. Si no existe, devolver `null`.

Ejemplo de uso:

```js
console.log(buscarVideojuego("Minecraft"))
```

**Condición:** resolver todos los pasos utilizando JavaScript y mostrar los resultados mediante la consola. No es necesario utilizar HTML ni CSS.
