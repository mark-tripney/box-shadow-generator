import React from 'react';

export default function Form(props) {
  return (
    <form className="form--base">
      <div className="form--slider">
        <input
          type="range"
          name="offset-x"
          id="offset-x"
          min={-100}
          max={100}
          value={props.offsetX}
          onChange={props.onChangeOffsetX}
        />
        <label htmlFor="offset-x" className="label--margin-l">
          Horizontal
        </label>
      </div>
      <div className="form--slider">
        <label htmlFor="offset-y" className="label--margin-r">
          Vertical
        </label>
        <input
          type="range"
          name="offset-y"
          id="offset-y"
          min={-100}
          max={100}
          value={props.offsetY}
          onChange={props.onChangeOffsetY}
        />
      </div>
      <div className="form--slider">
        <input
          type="range"
          name="blur-radius"
          id="blur-radius"
          min={0}
          max={100}
          value={props.blurRadius}
          onChange={props.onChangeBlurRadius}
        />
        <label htmlFor="blur-radius" className="label--margin-l">
          Blur
        </label>
      </div>
      <div className="form--slider">
        <label htmlFor="spread-radius" className="label--margin-r">
          Spread
        </label>
        <input
          type="range"
          name="spread-radius"
          id="spread-radius"
          min={-100}
          max={100}
          value={props.spreadRadius}
          onChange={props.onChangeSpreadRadius}
        />
      </div>
    </form>
  );
}
