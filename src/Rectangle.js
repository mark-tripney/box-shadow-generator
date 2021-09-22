import React from 'react';
import styled from 'styled-components';

export default function Rectangle(props) {
  const DemoShape = styled.div`
    width: 70%;
    height: 200px;
    border: 1px solid #000;
    box-shadow: ${props.offsetX}px ${props.offsetY}px ${props.blurRadius}px
      ${props.spreadRadius}px teal;
  `;

  return <DemoShape />;
}
