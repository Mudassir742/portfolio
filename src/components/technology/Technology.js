import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { GiCheckMark } from "react-icons/gi";
import techPhoto from "./images/technology.png";

import "./Technology.css";
const Technology = () => {
    
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="tech-main">
      <div className="tech-container">
        <div className="tech-image" data-aos="zoom-in">
          <img src={techPhoto} alt="tech" />
        </div>

        <div className="tech-content" data-aos="zoom-in">
          <ul>
            <li>
              <GiCheckMark className="tech-icon" /> Html, Css & Javascript
            </li>
            <li>
              <GiCheckMark className="tech-icon" /> Reactjs, Nextjs & React
              Native
            </li>
            <li>
              <GiCheckMark className="tech-icon" />
              Nodejs & Firebase
            </li>
            <li>
              <GiCheckMark className="tech-icon" /> MongoDB & MySql
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
