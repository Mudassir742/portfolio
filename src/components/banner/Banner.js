import React from "react";
import TypeWriter from "typewriter-effect";

import "./Banner.css";

const Banner = () => {
  const getStarted = (e) => {
    e.preventDefault();
    console.log(`button is clicked`);
  };

  return (
    <section className="main-banner">
      <div className="inner-banner">
        <div className="type-effect">
          <TypeWriter
            options={{
              strings: ["Mobile Developer", "UI/UX Designer", "MERN Developer"],
              autoStart: true,
              loop: true,
              cursor: null,
            }}
          />
        </div>
        <h1>Hi, I'm Mudassir. Its good to see you.</h1>
        <p>
          Expert in developing Mobile Apps and Web Apps. If you are looking for
          developer you can contact me Here{" "}
        </p>

        <div className="banner-btn">
          <button onClick={getStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
