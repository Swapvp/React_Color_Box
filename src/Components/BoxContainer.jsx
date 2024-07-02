import React, { useState, useCallback } from "react";
import "./BoxContainer.css";
import Box from "./Box";
import { rgbValue, generateColors } from "./helper";

const BoxContainer = ({ num = 18 }) => {
  const [colors, setColors] = useState(generateColors(num));

  const changeColor = useCallback((c) => {
    let newColor;
    do {
      newColor = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
    } while (newColor === c);

    setColors((colors) =>
      colors.map((color) => (color !== c ? color : newColor))
    );
  }, []);

  return (
    <div className="BoxContainer">
      {colors.map((color, index) => (
        <Box key={index} color={color} changeColor={changeColor} />
      ))}
    </div>
  );
};

export default BoxContainer;
