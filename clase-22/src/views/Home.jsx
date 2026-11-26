import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ContenidoPrincipal } from "../components/ContenidoPrincipal"
import { Producto } from "../components/Producto"



// Componente de página
const Home = () => {
  const productos = [
    {
      id: '7c68315c-d5c1-4c68-b425-084c17a8cf86',
      nombre: "Bicicleta PPW",
      categoria: "Deporte",
      precio: 1000,
      stock: 0
    },
    {
      id: 'a1b2c3d4-e5f6-4789-8123-456789abcdef',
      nombre: "Pelota de fútbol",
      categoria: "Deporte",
      precio: 2500,
      stock: 50
    },
    {
      id: 'b2c3d4e5-f6a7-4890-9234-56789abcdef1',
      nombre: "Auriculares Bluetooth",
      categoria: "Tecnología",
      precio: 8500,
      stock: 30
    },
    {
      id: 'c3d4e5f6-a7b8-4901-a345-6789abcdef12',
      nombre: "Mochila urbana",
      categoria: "Accesorios",
      precio: 12000,
      stock: 20
    },
    {
      id: 'd4e5f6a7-b8c9-4012-b456-789abcdef123',
      nombre: "Teclado mecánico",
      categoria: "Tecnología",
      precio: 18000,
      stock: 0
    },
    {
      id: 'e5f6a7b8-c9d0-4123-c567-89abcdef1234',
      nombre: "Botella térmica",
      categoria: "Hogar",
      precio: 6500,
      stock: 0
    }
  ]

  return <>
    <Header />
    <ContenidoPrincipal>
      <section>
        <h2>Productos destacados</h2>
        <div id="listaDeProductos">
          {/* Renderización de productos por map */}
          {
            productos.map((producto) => <Producto
              nombre={producto.nombre}
              categoria={producto.categoria}
              precio={producto.precio}
              stock={producto.stock}
            />)
          }
          {/* Renderización de productos individuales */}
          {/* <Producto nombre="Bicicleta LLM" categoria="Gimnasio" precio="1200" stock="230" />
          <Producto nombre="Computadora" categoria="Juego" precio="3000" stock="5" />
          <Producto nombre="Parlante" categoria="Música" precio="290" stock="0" /> */}
        </div>
      </section>
    </ContenidoPrincipal>
    <Footer />
  </>
}

export { Home }