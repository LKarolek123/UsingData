import React from 'react';



 const cardStyle={
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    width: "150px",
    height: "150px",
    textAlign: "center",
    alignItems: "center",
    margin: "20px"


}
const Card = ({ id, colorName, isCenter, color}) => {
    
    return(
        <div className={`card ${isCenter ? "center" : ""}`} style={{ backgroundColor: color }}>
      
      <div className="color-name"><h3>{colorName}</h3></div>
    </div>
        
    
    );
};

export default Card