import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Laravel Developer",
          "Passionate Linux Enthusiast",
          "100% Committed to the work",
          "Effective Problem Solver",
          "Custom ROM flashing",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
