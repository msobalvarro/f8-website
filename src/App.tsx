import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from './components/ui/footer'
import { NavbarUi } from './components/ui/navbar'
import { useFetch } from './hooks/useFetch'
import { PreferencesPropierties } from './utils/interfaces'
import { ReactElement, useEffect } from 'react'
import { useStorePropierties } from './utils/store'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariants } from './utils/constants'
import Home from './app/home'
import Products from './app/products'
import Contact from './app/contact'
import Services from './app/service'
import About from './app/about'
import { ToastContainer } from 'react-toastify'

const MotionComponent = ({ children }: { children: ReactElement }) => (
  <motion.div
    initial='initial'
    animate='animate'
    exit='exit'
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

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
        <AnimatePresence mode='sync'>
          <Routes>
            <Route path='/' element={
              <MotionComponent>
                <Home />
              </MotionComponent>
            } />
            <Route path='/products' element={
              <MotionComponent>
                <Products />
              </MotionComponent>
            } />
            <Route path='/contact' element={
              <MotionComponent>
                <Contact />
              </MotionComponent>
            } />
            <Route path='/services' element={
              <MotionComponent>
                <Services />
              </MotionComponent>
            } />
            <Route path='/about' element={
              <MotionComponent>
                <About />
              </MotionComponent>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>

      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
