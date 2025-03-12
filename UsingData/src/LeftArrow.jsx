import LEFTARROW from './assets/left-arrow.svg';
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


const LeftArrow = ({ onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <img src={LEFTARROW} alt="Left Arrow" style={imgStyle} />
    </button>
  );
};
export default LeftArrow