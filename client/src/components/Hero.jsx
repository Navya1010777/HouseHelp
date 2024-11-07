import React from "react";
import image from "../images/heroimg.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Reliable Home Help, <br />
          Just a Tap Away
        </h1>
        <p>
        Find trusted professionals for cleaning, chores, and more—when you need them, where you need them.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
