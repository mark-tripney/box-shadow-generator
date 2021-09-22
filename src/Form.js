import React from 'react';

export default function Form(props) {
  return (
    <form className="form--base">
      <label htmlFor="offset-x" className="label--horizontal">
        Horizontal
      </label>
      <input
        type="range"
        name="offsetX"
        id="offset-x"
        min={-50}
        max={50}
        value={props.offsetX}
        onChange={props.onChangeOffsetX}
        onDoubleClick={props.onDoubleClickInput}
      />
      <label htmlFor="offset-y" className="label--vertical">
        Vertical
      </label>
      <input
        type="range"
        name="offset-y"
        id="offset-y"
        min={-50}
        max={50}
        value={props.offsetY}
        onChange={props.onChangeOffsetY}
      />
      <label htmlFor="blur-radius" className="label--blur">
        Blur
      </label>
      <input
        type="range"
        name="blur-radius"
        id="blur-radius"
        min={0}
        max={50}
        value={props.blurRadius}
        onChange={props.onChangeBlurRadius}
      />
      <label htmlFor="spread-radius" className="label--spread">
        Spread
      </label>
      <input
        type="range"
        name="spread-radius"
        id="spread-radius"
        min={-50}
        max={50}
        value={props.spreadRadius}
        onChange={props.onChangeSpreadRadius}
      />
      <label htmlFor="spread-radius" className="label--spread">
        Colour
      </label>
      <input
        type="color"
        name="shadow-colour"
        id="shadow-colour"
        minLength={4}
        maxLength={7}
        value={props.colour}
        onChange={props.onChangeColour}
      />
    </form>
  );
}
