import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from './components/ui/footer'
import { NavbarUi } from './components/ui/navbar'
import { useFetch } from './hooks/useFetch'
import { PreferencesPropierties } from './utils/interfaces'
import { useEffect } from 'react'
import { useStorePropierties } from './utils/store'
import Home from './app/home'
import Products from './app/products'
import Contact from './app/contact'
import Services from './app/service'
import About from './app/about'

function App() {
  const { setPropierties } = useStorePropierties()
  const { data } = useFetch<PreferencesPropierties[]>('/preferences')

  useEffect(() => {
    if (data) {
      setPropierties(data)
    }
  }, [data, setPropierties])

  return (
    <BrowserRouter>
      <main>
        <NavbarUi />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>

  )
}

export default App
