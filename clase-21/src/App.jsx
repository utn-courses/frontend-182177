// mi primer componente
// un componente es una función que retorna contenido visual
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

const App = () => {
  return <div>
    <Header />
    <Main />
    <Footer />
  </div>
}

// export nombrado
export { App }
