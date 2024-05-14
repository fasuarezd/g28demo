import Header from './components/Header'
import Saludo from './components/Saludo'
import Cards from './components/Cards'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contacto from './pages/Contacto'

function App() {

  return (
    <>
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contacto'>Contacto</Link>
            </li>
          </ul>
        </nav>
        <Saludo nombre={'Fabricio'} />
        <Cards />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
