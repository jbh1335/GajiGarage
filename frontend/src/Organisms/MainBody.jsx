import React from "react";
import styled from "styled-components";
import CategoryNav from "../Molecules/CategoryNav";
import LiveshowItem from "./LiveshowItem";
import Body from "../Atoms/Body";
import LiveStartBtn from "../Atoms/IconButtons/LiveStartBtn";
import { useNavigate } from "react-router-dom";

const FlexDiv = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

export default function MainBody() {
  const navigate = useNavigate();
  function startLive() {
    navigate("/liveshowsubmit");
  }
  return (
    <Body>
      <div className="page-header">지역 Liveshow</div>
      <FlexDiv>
        <LiveshowItem isViewer={true} />
        <LiveshowItem isViewer={true} />
        <LiveshowItem isViewer={true} />
      </FlexDiv>
      <div className="page-header">전국 Liveshow</div>
      <CategoryNav />
      <FlexDiv>
        <LiveshowItem isViewer={true} />
        <LiveshowItem isViewer={true} />
        <LiveshowItem isViewer={true} />
      </FlexDiv>
      <LiveStartBtn buttonClick={startLive} />
    </Body>
  );
}
