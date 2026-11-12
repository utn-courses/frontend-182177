# Proyecto integrador: Catálogo de videojuegos

## Objetivo

Desarrollar una pequeña aplicación web que permita administrar un
catálogo de videojuegos utilizando JavaScript.

A lo largo del ejercicio vas a trabajar con objetos, arrays,
manipulación del DOM y eventos para construir una interfaz interactiva.

## Estructura del proyecto

Creá una carpeta llamada `catalogo-videojuegos` con los siguientes
archivos:

``` text
catalogo-videojuegos/
├── index.html
└── script.js
```

## Paso 1 --- Crear los datos

En el archivo `script.js`, creá un array llamado `videojuegos` que
contenga al menos 3 objetos.

Cada videojuego deberá tener las siguientes propiedades:

-   `id`: identificador numérico.
-   `nombre`: nombre del videojuego.
-   `genero`: género del videojuego.
-   `precio`: precio del videojuego.

## Paso 2 --- Crear la interfaz HTML

En `index.html`, desarrollá una página que contenga:

-   Un título principal: "Mi catálogo de videojuegos".
-   Un campo de búsqueda para filtrar videojuegos por nombre.
-   Un formulario para agregar nuevos videojuegos.
-   Un campo para ingresar el nombre.
-   Un campo para ingresar el género.
-   Un campo para ingresar el precio.
-   Un botón para agregar el videojuego.
-   Una sección donde se mostrarán los videojuegos registrados.

Vinculá correctamente el archivo `script.js` con el documento HTML.

## Paso 3 --- Seleccionar elementos del DOM

Desde JavaScript, seleccioná los elementos HTML que vas a necesitar para
trabajar con la interfaz.

Deberás utilizar `document.querySelector()`.

## Paso 4 --- Mostrar los videojuegos

Creá una función llamada `mostrarVideojuegos()` que reciba un array como
parámetro.

La función deberá:

-   Limpiar el contenido anterior de la lista.
-   Recorrer el array de videojuegos.
-   Crear un elemento HTML para cada videojuego.
-   Mostrar el nombre, género y precio de cada uno.
-   Agregar los elementos creados al contenedor correspondiente.

Para esta actividad deberás utilizar:

-   `forEach()`
-   `document.createElement()`
-   `textContent`
-   `appendChild()`

## Paso 5 --- Agregar videojuegos

Implementá el evento `submit` del formulario.

Cuando el usuario envíe el formulario:

1.  Evitá que la página se recargue.
2.  Obtené los valores ingresados.
3.  Creá un nuevo objeto con los datos del videojuego.
4.  Asignale un ID.
5.  Agregá el nuevo objeto al array.
6.  Actualizá la lista de videojuegos.
7.  Limpiá los campos del formulario.

## Paso 6 --- Buscar videojuegos

Implementá un buscador que permita filtrar los videojuegos por nombre.

El filtrado deberá realizarse mientras el usuario escribe.

Requisitos:

-   Escuchar el evento `input`.
-   Obtener el texto ingresado.
-   Utilizar `filter()` para obtener los videojuegos que coincidan con
    la búsqueda.
-   No distinguir entre mayúsculas y minúsculas.
-   Actualizar la lista con los resultados encontrados.

## Paso 7 --- Mejoras adicionales

Una vez completados los pasos anteriores, agregá las siguientes
funcionalidades:

**1. Eliminar videojuegos**

Cada videojuego deberá tener un botón para eliminarlo del catálogo.

**2. Mensaje sin resultados**

Si no existen videojuegos que coincidan con la búsqueda, mostrar un
mensaje indicando que no se encontraron resultados.

**3. Contador de videojuegos**

Mostrar la cantidad total de videojuegos registrados en el catálogo.

**4. Filtro por género**

Agregar un elemento `<select>` que permita filtrar los videojuegos por
género.

**5. Mejorar la interfaz**

Aplicar estilos CSS para mejorar la presentación del catálogo. Podés
utilizar tarjetas, colores, espaciados y otros recursos visuales.

## Requisitos técnicos

-   Utilizar JavaScript para toda la lógica de la aplicación.
-   Trabajar con objetos y arrays.
-   Utilizar métodos de arrays como `forEach()` y `filter()`.
-   Manipular elementos HTML mediante el DOM.
-   Implementar eventos mediante `addEventListener()`.
-   Utilizar funciones para organizar el código.
-   Mantener separados el HTML y el JavaScript.

## Entrega

El proyecto deberá contener los archivos necesarios para ejecutarse
correctamente.

Se evaluará el funcionamiento de las funcionalidades solicitadas, el uso
correcto de los conceptos trabajados en clase y la organización del
código.

**Importante:** el objetivo es que puedas resolver el ejercicio
utilizando los conceptos vistos durante la clase. Podés investigar y
consultar documentación para resolver las dificultades que aparezcan
durante el desarrollo.
