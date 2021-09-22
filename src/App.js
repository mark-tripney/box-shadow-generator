import React, { useState } from 'react';
import Form from './Form';
import Rectangle from './Rectangle';
import CSSCode from './CSSCode';
import '@fontsource/work-sans/700.css';
import '@fontsource/bitter/400.css';
import '@fontsource/roboto-mono/400.css';
import './style.css';

export default function App() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [inset, setInset] = useState(false);
  const [colour, setColour] = useState('#000');

  function handleChangeOffsetX(e) {
    setOffsetX(e.target.value);
  }

  function handleChangeOffsetY(e) {
    setOffsetY(e.target.value);
  }

  function handleChangeBlurRadius(e) {
    setBlurRadius(e.target.value);
  }

  function handleChangeSpreadRadius(e) {
    setSpreadRadius(e.target.value);
  }

  return (
    <div className="container">
      <h1>Box Shadow Generator</h1>
      <Rectangle
        offsetX={offsetX}
        offsetY={offsetY}
        blurRadius={blurRadius}
        spreadRadius={spreadRadius}
      />
      <Form
        offsetX={offsetX}
        onChangeOffsetX={handleChangeOffsetX}
        offsetY={offsetY}
        onChangeOffsetY={handleChangeOffsetY}
        blurRadius={blurRadius}
        onChangeBlurRadius={handleChangeBlurRadius}
        spreadRadius={spreadRadius}
        onChangeSpreadRadius={handleChangeSpreadRadius}
      />
      <CSSCode
        offsetX={offsetX}
        offsetY={offsetY}
        blurRadius={blurRadius}
        spreadRadius={spreadRadius}
      />
    </div>
  );
}
