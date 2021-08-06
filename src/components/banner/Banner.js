import React from "react";
import TypeWriter from "typewriter-effect";

import "./Banner.css";

const Banner = () => {
  return (
    <section className="main-banner">
      <div className="inner-banner">
        <h1>I am Mudassir Waheed <br/>A</h1>
        <div className="type-effect">
          <TypeWriter
            options={{
              strings: [
                "Mobile App Devloper",
                "Web Designer",
                "Mern Stack Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: null,
            }}
          />
        </div>

        <p>
          Expert in devloping Mobile Apps and Web Apps. If you are looking for
          developer you can contact me Here{" "}
        </p>

        <button className="banner-button" onClick={(e)=>{e.preventDefault() }}>Get Started</button>
      </div>
    </section>
  );
};

export default Banner;
