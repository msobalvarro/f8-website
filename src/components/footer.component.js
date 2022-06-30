import "../styles/footer.scss"
import logo from "../assets/images/logo.png"

const FooterComponent = () => (
  <footer className="footer-container">
    <div className="text-info">
      <p>
        Somos una empresa implementadora de equipos
        tecnológicos, especialistas en instalación de CCTV
        e infraestructura informática.

        Nuestros técnicos cuentan con certificaciones
        internacionales de diferentes marcas tales como:
        Dahua, Cisco, Mikrotic, Fortinet.


      </p>

      <p>
        Copyright © ${new Date().getFullYear()} by F8Technologies. All rights reserved.
      </p>
    </div>

    <div className="container-brand">
      <figure>
        <img src={logo} alt="logo" className="brand-logo" />
      </figure>


    </div>
  </footer>
)

export default FooterComponent