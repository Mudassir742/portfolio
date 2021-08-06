import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { SiAdobeillustrator } from "react-icons/si";

import "./Services.css";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-content">
        <div className="services-box">
          <div className="service-icon">
            <AiFillAndroid />
          </div>
          <h4>Mobile Development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
        </div>
        <div className="services-box">
          <div className="service-icon">
            <BiMobileAlt />
          </div>
          <h4>Responisve Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
        </div>
        <div className="services-box">
          <div className="service-icon">
            <SiAdobeillustrator/>
          </div>
          <h4>Design Replica</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
        </div>
      </div>
      <div className="services-btn">
            <button> Learn More</button>
      </div>
    </div>
  );
};

export default Services;
