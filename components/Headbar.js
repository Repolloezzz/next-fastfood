import style from "../styles/Headbar.module.scss";
import { Button } from "./Button";
import {
  BsStarFill,
  BsCurrencyExchange,
  BsMapFill,
  BsCollectionFill,
  BsPatchQuestionFill,
  BsHouseFill
} from "react-icons/bs";
import { useEffect, useState } from "react";

export function Headbar() {

  const [active, setActive] = useState(true)
  const [HB1, setHB1] = useState("")
  const [HB2, setHB2] = useState("")
  const [HB3, setHB3] = useState("")
  const [block, setBlock] = useState("")
  const [menuStyle, setMenuStyle] = useState("")

  function MenuActive() {
    setActive(!active)
    if(active) {
      setHB1(style.HB1)
      setHB2(style.HB2)
      setHB3(style.HB3)
      setBlock(style.blockNav_active)
      setMenuStyle(style.HeadNav_active)
    } else {
      setHB1("")
      setHB2("")
      setHB3("")
      setBlock("")
      setMenuStyle("")
    }
  }


  return (
    <>
      <header className={`${style.head}`}>
        <div className={`${style.logo} centerH`}>
          <h1>FastFood</h1>
          <picture>
            <img src="/icons/pacman_icon.webp" alt="logo" />
          </picture>
        </div>
        <div className={`${style.HamburgerButton}`} onClick={MenuActive}>
          <span className={`${HB1}`}></span>
          <span className={`${HB2}`}></span>
          <span className={`${HB3}`}></span>
        </div>
        <div className={`${block} ${style.blockNav}`} onClick={MenuActive}></div>
        <div className={`centerH ${style.HeadNav} ${menuStyle}`}>
          <ul>
            <li>
              <Button type={"in"} url={"#"}>
                <BsHouseFill></BsHouseFill>
                Inicio
              </Button>
            </li>
            <li>
              <Button type={"in"} url={"#"}>
                <BsCurrencyExchange></BsCurrencyExchange>
                Más barato
              </Button>
            </li>
            <li>
              <Button type={"in"} url={"#"}>
                <BsCollectionFill></BsCollectionFill>
                Registro completo
              </Button>
            </li>
            <li>
              <Button type={"in"} url={"#"}>
                <BsMapFill></BsMapFill>
                Mapa de puestos
              </Button>
            </li>
            <li>
              <Button type={"in"} url={"#"}>
                <BsPatchQuestionFill></BsPatchQuestionFill>
                Acerca de FastFood
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
