import React, { useState } from "react";
import Form from "./Form";
import Rectangle from "./Rectangle";
import "@fontsource/work-sans/700.css";
import "@fontsource/bitter/400.css";
import "./style.css";

export default function App() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [inset, setInset] = useState(false);
  const [colour, setColour] = useState("#000");

  function handleChangeOffsetX(e) {
    setOffsetX(e.target.value);
  }

  function handleChangeOffsetY(e) {
    setOffsetY(e.target.value);
  }

  return (
    <div className="container">
      <h1>Box Shadow Generator</h1>
      <Rectangle offsetX={offsetX} offsetY={offsetY} />
      <Form
        offsetX={offsetX}
        offsetY={offsetY}
        onChangeOffsetX={handleChangeOffsetX}
        onChangeOffsetY={handleChangeOffsetY}
      />
      <p>X: {offsetX}</p>
      <p>Y: {offsetY}</p>
    </div>
  );
}
