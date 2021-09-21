import React from 'react';

export default function Form(props) {
  return (
    <form className="form--base">
      <div className="form--slider">
        <label htmlFor="offset-x">Horizontal (offset-x)</label>
        <input
          type="range"
          name="offset-x"
          id="offset-x"
          min={-100}
          max={100}
          value={props.offsetX}
          onChange={props.onChangeOffsetX}
        />
      </div>
      <div className="form--slider">
        <label htmlFor="offset-y">Vertical (offset-y)</label>
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
    </form>
  );
}
