import React from 'react';

export default function Rectangle(props) {
  return (
    <div
      style={props.style}
      className="rectangle--flex"
      onClick={props.handleClick}
    >
      <p>Click or tap to reset.</p>
    </div>
  );
}
