import './CardContainer.css';
import Card from './Card.jsx';
import React, { useState } from "react";
import LeftArrow from "./LeftArrow.jsx";
import RightArrow from "./RightArrow.jsx";

const colors = [
  { id: 1, name: "Red", color: "hsl(0, 100%, 50%)" },
  { id: 2, name: "Orange", color: "hsl(30, 100%, 50%)" },
  { id: 3, name: "Yellow", color: "hsl(60, 100%, 50%)" },
  { id: 4, name: "Green", color: "hsl(120, 100%, 50%)" },
  { id: 5, name: "Light-Blue", color: "hsl(180, 100%, 50%)" },
  { id: 6, name: "Cyan", color: "hsl(200, 100%, 50%)" },
  { id: 7, name: "Blue", color: "hsl(240, 100%, 50%)" },
  { id: 8, name: "Violet", color: "hsl(270, 100%, 50%)" },
  { id: 9, name: "Pink", color: "hsl(300, 100%, 50%)" },
  { id: 10, name: "Magenta", color: "hsl(330, 100%, 50%)" }
];

const CardContainer = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % colors.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + colors.length) % colors.length);
    };

    // Tworzymy zapętloną listę kart
    const wrappedColors = [
      colors[(index - 1 + colors.length) % colors.length], // Poprzednia karta
      colors[index], // Środkowa karta
      colors[(index + 1) % colors.length] // Następna karta
    ];

    const centerColor = colors[index]?.color || "black"; // Kolor środkowej karty

    return (
        <div className="main-container">
            <div className="logo" style={{ backgroundColor: centerColor }}>
                <h1>Pick a color Bro!</h1>
            </div>
            <div className="card-container">
              <LeftArrow onClick={prevSlide} />
              <div className="cards-wrapper">
                {wrappedColors.map((colorItem, i) => (
                  <Card key={colorItem.id} colorName={colorItem.name} isCenter={i === 1} color={colorItem.color} />
                ))}
              </div>
              <RightArrow onClick={nextSlide} />
            </div>
        </div>
    );
};

export default CardContainer;