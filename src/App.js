// import assets
import "./styles/app.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { ChakraProvider } from "@chakra-ui/react"

// import component
import NavbarComponent from "./components/navbar.component"
import FooterComponent from "./components/footer.component"
import FeedbackComponent from "./components/feedback.component"
import Presentation from "./pages/presentation-head.page"
import BrandsComponent from "./components/brans.component"
import Contact from "./components/contact.component"
import BlogComponent from "./components/blog.component"

function App() {
  return (
    <ChakraProvider>
      <NavbarComponent />

      <Presentation />

      <BrandsComponent />

      <FeedbackComponent />

      <BlogComponent />
      
      {/* <MapComponent /> */}

      <Contact />

      <FooterComponent />
    </ChakraProvider>
  )
}

export default App
