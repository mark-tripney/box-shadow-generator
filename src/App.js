import React, { useState } from 'react';
import Form from './Form';
import Rectangle from './Rectangle';
import Footer from './Footer';
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
  const [shadowType, setShadowType] = useState('drop');
  const [colour, setColour] = useState('#000');

  function handleChangeShadowType(e) {
    setShadowType(e.target.value);
  }

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

  function handleDoubleClick(e) {
    console.log(e.target.name);
  }

  function handleChangeColour(e) {
    setColour(e.target.value);
  }

  return (
    <>
      <div className="container">
        <h1>Box Shadow Generator</h1>
        <Rectangle
          style={{
            width: '60%',
            minHeight: '200px',
            border: '1px solid #000',
            boxShadow: `${
              shadowType === 'inset' ? 'inset' : ''
            } ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${colour}`,
          }}
        />
        <Form
          shadowType={shadowType}
          onChangeShadowType={handleChangeShadowType}
          offsetX={offsetX}
          onChangeOffsetX={handleChangeOffsetX}
          offsetY={offsetY}
          onChangeOffsetY={handleChangeOffsetY}
          blurRadius={blurRadius}
          onChangeBlurRadius={handleChangeBlurRadius}
          spreadRadius={spreadRadius}
          onChangeSpreadRadius={handleChangeSpreadRadius}
          onDoubleClickInput={handleDoubleClick}
          colour={colour}
          onChangeColour={handleChangeColour}
        />
        <CSSCode
          shadowType={shadowType}
          offsetX={offsetX}
          offsetY={offsetY}
          blurRadius={blurRadius}
          spreadRadius={spreadRadius}
          colour={colour}
        />
      </div>
      <Footer />
    </>
  );
}
