import React from 'react';
import styled from 'styled-components';

const RectangleStyled = styled.div`
  width: 70%;
  height: 200px;
  border: 1px solid #000;
  box-shadow: ${props => props.offsetX}px ${props => props.offsetY}px
    ${props => props.blurRadius}px ${props => props.spreadRadius}px teal;
`;

export default function Rectangle({ ...props }) {
  return (
    <RectangleStyled
      offsetX={props.offsetX}
      offsetY={props.offsetY}
      blurRadius={props.blurRadius}
      spreadRadius={props.spreadRadius}
    />
  );
}
