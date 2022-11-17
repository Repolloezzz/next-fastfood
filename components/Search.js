import { useEffect, useRef, useState } from "react";
import style from "../styles/Search.module.scss";
import {
  BsSearch,
  BsCash,
  BsEggFill,
  BsFillCompassFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { requestToBodyStream } from "next/dist/server/body-streams";
export function Searchbar( {height} ) {
  const [type, setType, getType] = useState("");
  const [value, setValue, getValue] = useState("");
  const search = useRef({ type: "", value: "" });

  const [selectStyle, setSelectStyle] = useState("");
  const [selectSW, setSelectSW] = useState(true);

  function SelectActive() {
    setSelectSW(!selectSW);
    if (selectSW) {
      setSelectStyle(style.Options);
    } else {
      setSelectStyle("");
    }
  }
  function SelectChange({ target }) {
    const title = document.getElementById("SelectHero");
    title.innerHTML = target.innerHTML;
    const aux = target.getAttribute("name");
    setType(aux);
  }

  const options = [
    {
      name: "comida",
      icon: <BsEggFill />,
      content: "Por comida",
      example: "Ej. Salteñas",
    },
    {
      name: "lugar",
      icon: <BsFillCompassFill />,
      content: "Por lugar",
      example: "Ej. Sopocachi",
    },
    {
      name: "precio",
      icon: <BsCash />,
      content: "Por precio",
      example: "Ej. Bs. 5",
    },
  ];
  useEffect(() => {
    const searchInput = document.getElementById("searchInput");
    const aux = options.find((element) => {
      return element.name == type;
    });
    const example = aux == undefined ? { example: "" } : aux;
    searchInput.setAttribute("placeholder", example.example);
    search.current.type = type;
  }, [type]);
  function ValueChange(e) {
    setValue(e.target.value);
    search.current.value = value;
  }
  function Submit() {
    console.log(search.current);
  }
  return (
    <>
      <div id="SearchContainer" className={`${style.container} centerV`}>
        <div className={`${style.searchContainer}`} style={{ "--alto": `${height}px` }}>
          <div className={`${style.description}`}>
            <h1>Opciones de cualquier lado para presupuestos ajustados</h1>
          </div>
          <div className={`${style.bar}`} style={{ "--alto": `${height}px` }}>
            <div className={`${style.select}`} onClick={SelectActive}>
              <h3>
                <p id="SelectHero">Busqueda?</p>
                <BsFillCaretDownFill></BsFillCaretDownFill>
              </h3>
              <options className={`${selectStyle}`}>
                {options.map((e, i) => {
                  return (
                    <div key={i} name={e.name} onClick={SelectChange}>
                      {e.icon}
                      {e.content}
                    </div>
                  );
                })}
              </options>
            </div>
            <input
              id="searchInput"
              name="search"
              placeholder="Ej Salteñas Bs. 5"
              maxLength={60}
              onChange={ValueChange}
            ></input>
            <submit onClick={Submit}>
              <BsSearch></BsSearch>
            </submit>
          </div>
        </div>
      </div>
    </>
  );
}

