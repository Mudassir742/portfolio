import React from "react";
import TypeWriter from "typewriter-effect";

import "./Banner.css";

const Banner = () => {
  return (
    <section className="main-banner">
      <div className="inner-banner">
        <div className="type-effect">
          <TypeWriter
            options={{
              strings: [
                "Mobile Devloper",
                "UI/UX Designer",
                "Mern Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: null,
            }}
          />
        </div>
        <h1>Hi, I'm Mudassir. Its good to see you.</h1>
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
