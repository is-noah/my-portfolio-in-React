import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export const _mySkillsComponents = () => {
  return (
    <div className="App-Skills">
      <h2>
        Skills:
      </h2>
      <p>
        Hello My name is Andriel Noa Lores and I am a web developer, we build
        web applications with quality and unique styles.
      </p>
      <div className="skillsByNoah">
        <FontAwesomeIcon icon={faReact}/>
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
      </div>
    </div>
  );
};
