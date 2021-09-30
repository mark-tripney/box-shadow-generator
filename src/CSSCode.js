import React from 'react';
import clipboard from './img/clipboard-img-min.png';

export default function CSSCode(props) {
  return (
    <>
      <code>
        box-shadow: {props.shadowType === 'inset' ? 'inset' : null}{' '}
        {props.offsetX}px {props.offsetY}px {props.blurRadius}px{' '}
        {props.spreadRadius}px {props.colour};
        <img
          src={clipboard}
          className="clipboard-img"
          alt="A clipboard"
          role="button"
        />
      </code>
    </>
  );
}
