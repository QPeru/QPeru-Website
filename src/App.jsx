import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import SobreNosotros from './pages/SobreNosotros'
import Eventos from './pages/Eventos'
import Contactanos from './pages/Contactanos'
import Organizacion from './pages/Organizacion'
import VideoBackground from './components/VideoBackground'
import Reglamento from './pages/Reglamento'
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <VideoBackground />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/organizacion" element={<Organizacion />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/reglamento" element={<Reglamento />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}