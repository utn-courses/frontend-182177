# Actividad práctica --- Mi primera aplicación React

**Tiempo estimado:** 25 a 35 minutos

## Consigna: Crear una página de presentación de un emprendimiento

Cada estudiante deberá crear una pequeña página web utilizando React,
dividiendo la interfaz en diferentes componentes.

La temática puede ser libre: una tienda de ropa, un emprendimiento de
comida, una tienda gamer, un gimnasio, una librería o cualquier otro
negocio.

## Requisitos

-   Crear un proyecto React utilizando Vite.
-   Crear un componente `Navbar`.
-   Crear un componente `Presentacion`.
-   Crear un componente `Producto`.
-   Crear un componente `Footer`.
-   Utilizar los componentes dentro de `App`.
-   Aplicar estilos CSS.
-   Utilizar al menos tres expresiones JavaScript dentro de JSX.

## Estructura sugerida

``` text
src/
├── App.jsx
├── App.css
├── Navbar.jsx
├── Presentacion.jsx
├── Producto.jsx
├── Footer.jsx
└── main.jsx
```

## Contenido sugerido para cada componente

  Componente       Contenido
  ---------------- ------------------------------------------
  `Navbar`         Logo y enlaces de navegación
  `Presentacion`   Nombre del negocio, descripción y título
  `Producto`       Nombre, descripción, precio y botón
  `Footer`         Redes sociales, contacto o copyright

## Ejemplo de expresiones JavaScript dentro de JSX

``` jsx
function Presentacion() {
  const nombre = "Pixel Store"
  const productos = 15

  return (
    <section>
      <h1>Bienvenidos a {nombre}</h1>
      <p>Tenemos {productos} productos disponibles.</p>
      <p>Actualmente estamos {productos > 0 ? "vendiendo" : "sin stock"}.</p>
    </section>
  )
}

export default Presentacion
```

## Entrega

La aplicación debe ejecutarse correctamente en el navegador y presentar
los cuatro componentes solicitados, con sus respectivos estilos.

Revisá que los nombres de los archivos y componentes coincidan con los
indicados y que todos los componentes estén importados y utilizados
desde `App.jsx`.
