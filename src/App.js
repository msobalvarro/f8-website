// import assets
import "./styles/app.scss"

// import component
import NavbarComponent from "./components/navbar.component"
import FooterComponent from "./components/footer.component"
import FeedbackComponent from "./components/feedback.component"
import Presentation from "./pages/presentation-head.page"

function App() {
  return (
    <>
      <div className="App">
        {/* <NavbarComponent /> */}

        <Presentation />

        <FeedbackComponent />

      </div>

      <FooterComponent />
    </>
  )
}

export default App
