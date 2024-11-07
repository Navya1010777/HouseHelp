import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At HouseHelp, we’re on a mission to make finding reliable home help easy,
            safe, and convenient. We’ve created a trusted
            platform where you can connect with skilled professionals in just a few clicks. 
            Every helper in our network is thoroughly vetted to ensure quality, security, and
            a seamless experience. With , you can HouseHelp book the assistance you need, when
            you need it, leaving you more time to focus on what matters most. 
            Welcome to effortless home management
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
