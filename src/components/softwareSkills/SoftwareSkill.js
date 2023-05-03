import React from "react";
import "./SoftwareSkill.scss";
import {habilidadesSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-Habilidades-main-div">
        <ul className="dev-icons">
          {habilidadesSection.softwarehabilidades.map((Habilidades, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={Habilidades.skillName}
              >
                <i className={Habilidades.fontAwesomeClassname}></i>
                <p>{Habilidades.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
