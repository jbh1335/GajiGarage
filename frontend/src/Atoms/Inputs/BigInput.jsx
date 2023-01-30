import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 280px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.color.darkgrey};
  border-radius: 8px;

  color: ${({ theme }) => theme.color.black};
`;

export default function BigInput({ placehold, inputValue }) {
  return (
    <StyledInput
      className="body1-regular"
      onChange={inputValue}
      placeholder={placehold}
    ></StyledInput>
  );
}