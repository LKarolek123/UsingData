import RIGHTARROW from './assets/right-arrow.svg';
import React from 'react';

const buttonStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%", // Tworzy okrągły kształt
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s",
};

const imgStyle = {
    width: "60px",
    height: "60px",
  };


const RightArrow = ({ onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <img src={RIGHTARROW} alt="Right Arrow" style={imgStyle} />
    </button>
  );
};
export default RightArrow