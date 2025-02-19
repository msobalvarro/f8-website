import 'animate.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from './components/ui/footer'
import { NavbarUi } from './components/ui/navbar'
import { useFetch } from './hooks/useFetch'
import { PreferencesPropierties } from './utils/interfaces'
import { useEffect } from 'react'
import { useStorePropierties } from './utils/store'
import { ToastContainer } from 'react-toastify'
import Home from './app/home'
import Products from './app/products'
import Contact from './app/contact'
import Services from './app/service'
import About from './app/about'
import Jobs from './app/jobs'


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
      <main className='pt-[64px]'>
        <NavbarUi />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/jobs' element={<Jobs />} />
        </Routes>

        <Footer />
      </main>

      <ToastContainer position='bottom-right' />
    </BrowserRouter>

  )
}

export default App
