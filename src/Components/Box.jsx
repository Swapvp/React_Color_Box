import React, { useCallback } from "react";

const Box = ({ color, changeColor }) => {
  const handleChangeColor = useCallback(() => {
    changeColor(color);
  }, [changeColor, color]);

  return (
    <div
      onClick={handleChangeColor}
      style={{ backgroundColor: color, width: "13em", height: "13em" }}
    />
  );
};

export default Box;
