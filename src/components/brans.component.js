import { useState } from "react"
import Marquee from "react-fast-marquee"

import "../styles/brands.scss"

// import assets
import brandCablix from "../assets/brands-logo/Cablix.svg"
import brandCisco from "../assets/brands-logo/Cisco.svg"
import brandDahua from "../assets/brands-logo/Dahua.svg"
import brandDell from "../assets/brands-logo/Dell.svg"
import brandEnforcer from "../assets/brands-logo/Enforcer.svg"
import brandFortinet from "../assets/brands-logo/Fortinet.svg"
import brandMikroTik from "../assets/brands-logo/MikroTik.svg"
import brandUbiquiti from "../assets/brands-logo/Ubiquiti.svg"
import brandZKTeco from "../assets/brands-logo/ZKTeco.svg"

// lista de imagenes
const BrandList = [
  brandCablix,
  brandCisco,
  brandDahua,
  brandDell,
  brandEnforcer,
  brandFortinet,
  brandMikroTik,
  brandUbiquiti,
  brandZKTeco,
]

/** Componente lista de marcass */
const BrandsComponent = () => {
  // estado que indica si marquee 
  const [isPlay, setContinue] = useState(true)

  /** Funcion que se ejecuta cuando el usuaeri */
  const onHover = () => setContinue(false)

  /** Onleave */
  const onBlur = () => setContinue(true)

  return (
    <div className="container-brands">
      <h2>Nuestras marcas</h2>
      
      <Marquee loop={true} play={true} direction="left">
        {BrandList.map(
          (image, i) => <img key={i} src={image} alt="brand-logo" />
        )}
      </Marquee>
    </div>
  )
}

export default BrandsComponent