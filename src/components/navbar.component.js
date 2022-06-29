import React from "react"

import "../styles/navbar.scss"

// const 

const NavbarComponent = () => {
  return (
    <nav className="nav-bar">
      <ul className="list-container">
        <li>Inicio</li>
        <li>Informacion</li>
        <li>Clientes</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default NavbarComponent