import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { checkIsLogin } from "../../store/user";
import { setLocation } from "../../store/location";

import Header from "../../Templates/Layout/Header";
import Body from "../../Templates/Layout/Body";
import Page from "../../Templates/Layout/Page";
import styled from "styled-components";
import LiveshowItem from "../../Molecules/Cards/LiveshowItem";
import LiveStartBtn from "../../Atoms/IconButtons/LiveStartBtn";
import CategoryNav from "../../Molecules/Category/CategoryNav";
import Container from "../../Templates/Layout/Container";
import { getLives } from "../../util/api/liveApi";

const StyledPageHeader = styled.div`
  margin: 8px 4px 4px 0px;
`;

const StyledHr = styled.hr`
  background-color: #dddddd;
  padding: 0;
  margin: 8px -24px 4px -24px;
  border: 0;
  height: 1px;
  justify-content: center;
`;

export default function Main() {
  const isLogin = useSelector(checkIsLogin);

  const [allLives, setAllLives] = useState(undefined);
  const [aroundLives, setAroundLives] = useState(undefined);
  const [lng, setLng] = useState(127.2986652);
  const [lat, setLat] = useState(36.3555225);
  const [selected, setSelected] = useState("");
  //liveContentList 까지 가야됨.
  const navigate = useNavigate();
  function startLive() {
    navigate("/submit");
  }
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
    let aroundSearchCondition = {
      category: selected === "인기" ? "" : selected,
      title: "",
      joinUserSort: "",
      distanceSort: "ASC",
      latitude: lat,
      longitude: lng,
      national: false,
    };
    getLives(aroundSearchCondition, ({ data }) => {
      setAroundLives(data.liveContentList);
    });

    let nationalSearchCondition = {
      title: "",
      distanceSort: "",
      category: selected === "인기" ? "" : selected,
      joinUserSort: "DESC",
      latitude: 0,
      longitude: 0,
      national: true,
    };
    getLives(nationalSearchCondition, ({ data }) => {
      setAllLives(data.liveContentList);
    });
    let location = { lat: lat, lng: lng };
    dispatch(setLocation(location));
  }, [selected, lat, lng]);

  return (
    <Page>
      {/* 헤더 */}
      <Header isLogo={true} />
      <Body>
        <StyledPageHeader className="page-header">
          주변 라이브쇼
        </StyledPageHeader>
        <Container>
          {aroundLives &&
            aroundLives.map((show) => {
              return <LiveshowItem key={show.id} show={show} isViewer={true} />;
            })}
        </Container>
        <StyledHr />
        <StyledPageHeader className="page-header">
          전국 라이브쇼
        </StyledPageHeader>
        <CategoryNav setSelected={setSelected} />
        <Container>
          {allLives &&
            allLives.map((show) => {
              return <LiveshowItem key={show.id} show={show} isViewer={true} />;
            })}
        </Container>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <LiveStartBtn buttonClick={startLive} />
        </div>
      </Body>
    </Page>
  );
}
