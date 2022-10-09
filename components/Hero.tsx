import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name Is Tiffany!", "Developer", "Designer", "Freelancer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
