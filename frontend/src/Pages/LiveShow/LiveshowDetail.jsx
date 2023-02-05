import React from "react";
import Header from "../../Templates/Layout/Header";
import Page from "../../Templates/Layout/Page";
import Body from "../../Templates/Layout/Body";
import ItemCard from "../../Molecules/Cards/ItemCard";

export default function LiveshowDetail() {
  return (
    <Page>
      <Header isName="True" headerName="라이브쇼상세" />
      <Body>
        <div className="page-header">라이브쇼 제목</div>
        <div className="body1-regular">방송시작 시간 : 23.02.01 18:00</div>
        <div className="body1-regular">방송시간 : 1.5시간</div>
        <hr></hr>
        <div className="body1-header">판매제품 목록</div>
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={false}
          isSeller={true}
        />
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={false}
          isSeller={true}
        />
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={true}
          isSeller={true}
        />
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={true}
          isSeller={true}
        />
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={true}
          isSeller={true}
        />
        <ItemCard
          buttonType={"purchasedhistory"}
          isReview={true}
          isSeller={true}
        />
      </Body>
    </Page>
  );
}
