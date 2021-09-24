import React from 'react';

export default function Form(props) {
  return (
    <form className="form--base">
      <p>Shadow</p>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="shadowType"
            id="drop"
            value="drop"
            checked={props.shadowType === 'drop'}
            onChange={props.onChangeShadowType}
          />
          <label htmlFor="drop">Drop</label>
        </div>
        <div>
          <input
            type="radio"
            name="shadowType"
            id="inset"
            value="inset"
            checked={props.shadowType === 'inset'}
            onChange={props.onChangeShadowType}
          />
          <label htmlFor="inset">Inset</label>
        </div>
      </div>
      <label htmlFor="offset-x">Horizontal</label>
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
      <label htmlFor="offset-y">Vertical</label>
      <input
        type="range"
        name="offsetY"
        id="offset-y"
        min={-50}
        max={50}
        value={props.offsetY}
        onChange={props.onChangeOffsetY}
      />
      <label htmlFor="blur-radius">Blur</label>
      <input
        type="range"
        name="blurRadius"
        id="blur-radius"
        min={0}
        max={50}
        value={props.blurRadius}
        onChange={props.onChangeBlurRadius}
      />
      <label htmlFor="spread-radius">Spread</label>
      <input
        type="range"
        name="spreadRadius"
        id="spread-radius"
        min={-50}
        max={50}
        value={props.spreadRadius}
        onChange={props.onChangeSpreadRadius}
      />
      <label htmlFor="spread-radius">Colour</label>
      <input
        type="color"
        name="colour"
        id="shadow-colour"
        minLength={4}
        maxLength={7}
        value={props.colour}
        onChange={props.onChangeColour}
      />
    </form>
  );
}
