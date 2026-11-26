// props → valores que el componente padre le envia al hijo

const Producto = ({ nombre, categoria, precio, stock }) => {
  return <div className={stock > 0 ? "producto-disponible" : "producto-no-disponible"}>
    <h3>{nombre}</h3>
    <p>Categoria: {categoria}</p>
    <p>Precio: ${precio}</p>
    {/* Renderizado condicional */}
    {stock > 0 ? <p>Stock: {stock} unidades</p> : <p>No disponible</p>}
    {stock > 0 && <button>Comprar</button>}
  </div>
}

export { Producto }

// {condicion ? caso positivo : caso negativo}