import { ContenidoPrincipal } from "../components/ContenidoPrincipal"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const Contacto = () => {
  return <>
    <Header />
    <ContenidoPrincipal>
      <h1>Contacto</h1>
      <form>
        <input type="text" placeholder="Ingrese su nombre" />
        <input type="email" placeholder="Ingrese su email" />
        <textarea placeholder="Ingrese su mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </ContenidoPrincipal>
    <Footer />
  </>
}

export { Contacto }