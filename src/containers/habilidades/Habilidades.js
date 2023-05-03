import React, {useContext} from "react";
import "./Habilidades.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, habilidadesSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Habilidades() {
  const {isDark} = useContext(StyleContext);
  if (!habilidadesSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="Habilidades">
      <div className="Habilidades-main-div">
        <Fade left duration={1000}>
          <div className="Habilidades-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="Habilidades-text-div">
            <h1
              className={
                isDark ? "dark-mode Habilidades-heading" : "Habilidades-heading"
              }
            >
              {habilidadesSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle Habilidades-text-subtitle"
                  : "subTitle Habilidades-text-subtitle"
              }
            >
              {habilidadesSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {habilidadesSection.Habilidades.map((Habilidades, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle Habilidades-text"
                        : "subTitle Habilidades-text"
                    }
                  >
                    {Habilidades}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
