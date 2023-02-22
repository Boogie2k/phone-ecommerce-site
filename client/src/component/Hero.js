import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div class="hero">
      <h4>Your favourite phone mall</h4>
      <button
        onClick={() => {
          navigate("/catalogue");
        }}
      >
        check out our catalogue
      </button>
    </div>
  );
};

export default Hero;
