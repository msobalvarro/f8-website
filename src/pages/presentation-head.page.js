import "../styles/presentation.scss"

import logo from "../assets/f8tech-logo.png"

const Presentation = () => (
  <div className="container-fist-presentation">
    <figure>
      <img src={logo} />
    </figure>

    <h1><b>F8</b>Technologies</h1>

    <h2>Lorem Ipsum is simply dumm</h2>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

    <button className="btn btn-primary large">ver servicios</button>
  </div>
)

export default Presentation