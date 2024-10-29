import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "../Dropdown/Dropdown";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Header = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <header className="containerHeader">
      <img
        className="ImglogoHeader"
        src="/logoProCamHeader.png"
        alt="Logo"
        onClick={() => {
          return navigate("/");
        }}
      />
      <div className="containerNav">
        {isClickedMenu ? (
          <IconX
            stroke={2}
            className="img-menu"
            onClick={() => setIsClickedMenu(!isClickedMenu)}
          />
        ) : (
          <IconMenuDeep
            stroke={2}
            className="img-menu"
            onClick={() => setIsClickedMenu(!isClickedMenu)}
          />
        )}

        <nav className={isClickedMenu ? "Nav Nav-activate" : "Nav"}>
          <ul className="listNav">
            <li className="item item1">
              <Link to="/" className="linkNav" onClick={()=> setIsClickedMenu(false)} >
                Inicio
              </Link>
            </li>
            <li className="item item2">
              <Dropdown
                titleDropdown="Maquinaria CNC"
                options={[
                  { description: "CNC Router", goto: "/" },
                  { description: "CNC Plasma", goto: "/" },
                  { description: "Impresora 3D", goto: "/" },
                ]}
              />
            </li>
            <li className="item item3">
              <Link className="linkNav" to="/vacantes" onClick={()=> setIsClickedMenu(false)} >
                Vacantes
              </Link>
            </li>

            <li className="item item4">
              <Dropdown titleDropdown="Sobre Pro-Cam"  />
            </li>
            <li className="item item5">
              <Link className="linkNav" to="/contacto" onClick={()=> setIsClickedMenu(false)} >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
