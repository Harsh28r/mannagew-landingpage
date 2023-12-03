import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <div className="Hero">
      {/* Brand Info */}
      <div>
        <div className="Hero-Intro">
          <div className="Hero-Welcome">
            <span className="Welcome">👋 Welcome to Manage Wise!</span>
          </div>
          <div className="Hero-h1">Empower your business with </div>
          <div className="Hero-h1">
            <span>Strategic</span> insights
          </div>
          <div className="Hero-p">
            <p>
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </p>
          </div>
          {/* Buttons */}
          <div className="button">
            <button className="btn-start">Get Started</button>
            <button className="btn-demo">Watch Demo</button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="Image">
        <animated.img
          src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg"
          alt="Graph"
          sizes="90vw"
          style={{
            display: "block",
            width: "80%",
            height: "80%",
            borderRadius: "24px",
            objectPosition: "center",
            objectFit: "contain",
            imageRendering: "auto",
            ...fadeIn,
          }}
          className="Hero-image"
          onLoad={() => setIsVisible(true)}
        />
      </div>
    </div>
  );
}

export default Hero;
