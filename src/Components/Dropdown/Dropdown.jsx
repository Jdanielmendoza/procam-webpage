import { Link } from "react-router-dom";
import "./Dropdown.css";

import { IconChevronDown } from "@tabler/icons-react";

const defaultOptions = [
  { description: "op1", goto: "/" },
  { description: "op2", goto: "/" },
  { description: "op3", goto: "/" },
];

const Dropdown = ({ titleDropdown = "dropdown", options = defaultOptions }) => {
  return (
    <section className="containerDropdown">
      <div>
        <p className="titleDropdown">{titleDropdown}</p>
        <IconChevronDown
          stroke={2}
          size="16px"
          className="checvron-down-header"
        />
      </div>
      <div className="containerList">
        <ul className="listDropdown">
          {options.map((option, index) => {
            return (
              <li key={index} className="itemDrop">
                <Link to={option.goto} className="linkDropDownOP">
                  {option.description}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Dropdown;
