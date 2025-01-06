import Home from './app/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from './components/ui/footer'
import { NavbarUi } from './components/ui/navbar'
import Products from './app/products'
import Contact from './app/contact'
import Services from './app/service'

function App() {

  return (
    <BrowserRouter>
      <main>
        <NavbarUi />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>

  )
}

export default App
