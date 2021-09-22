import React from 'react';

export default function CSSCode(props) {
  return (
    <code>
      box-shadow: {props.offsetX}px {props.offsetY}px {props.blurRadius}px{' '}
      {props.spreadRadius}px {props.colour};
    </code>
  );
}
