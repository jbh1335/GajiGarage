import React from "react";
import styled from "styled-components";
import LiveshowItem from "../../Molecules/Cards/LiveshowItem";

const StyledSalesHistory = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function SalesHistory() {
  return (
    <StyledSalesHistory>
      <LiveshowItem />
      <LiveshowItem />
      <LiveshowItem />
      <LiveshowItem />
      <LiveshowItem />
    </StyledSalesHistory>
  );
}
