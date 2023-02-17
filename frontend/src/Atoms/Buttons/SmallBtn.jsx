import React from "react";
import styled, {css} from "styled-components";

const StyledSmallBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.graypurple};
  color: ${({ theme }) => theme.color.darkgrey};
  ${(props) =>
   (props.color === "white" || props.checked === false) &&
    css`
    background-color: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.darkgrey};
    `};
`;

export default function SmallBtn({ name, buttonClick, color, checked }) {
  //useState , event
  return (
    <StyledSmallBtn className="body1-header" onClick={buttonClick} color={color} checked={checked}>
      {name}
    </StyledSmallBtn>
  );
}
