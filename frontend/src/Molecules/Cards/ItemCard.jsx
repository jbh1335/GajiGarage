import React from "react";
import styled from "styled-components";
import ExtraSmallButton from "../../Atoms/Buttons/ExtraSmallBtn";
import Check from "../../Atoms/Inputs/Check";
import { useNavigate } from "react-router-dom";

const StyledItemCard = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 8px;
  border: 1.5px solid #d3385a;
  /* box-sizing: border-box; */
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  column-gap: 8px;
  justify-content: space-between;
`;
const ItemImage = styled.div`
  width: 72px;
  height: 72px;
  border: 1.5px solid #d3385a;
  border-radius: 8px 0px 0px 8px;
  box-sizing: border-box;
  //   background: url(${(props) => props.imgSrc}) no-repeat 0px 0px;
  background: url(./image/item-sample.png);
  background-size: cover;
`;
const ItemInfo = styled.div`
  width: calc(100% - 160px);
  height: 72px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  background-color: white;
`;
const ItemBtn = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export default function ItemCard({ item, buttonType, isReview }) {
  const navigate = useNavigate();
  return (
    <StyledItemCard>
      <ItemImage />
      <ItemInfo>
        <div className="body1-header">제품명</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="body2-bold">제안자</div>
          <div className="body2-bold">즉시구매가</div>
        </div>
      </ItemInfo>
      <ItemBtn>
        {buttonType === "check" ? <Check /> : <></>}
        {buttonType === "saleshistory" ? (
          <ExtraSmallButton name="한개" />
        ) : (
          <></>
        )}
        {buttonType === "purchasedhistory" ? (
          <ExtraSmallButton name="대화하기" />
        ) : (
          <></>
        )}
        {buttonType === "purchasedhistory" && isReview ? (
          <ExtraSmallButton
            name="후기작성"
            buttonClick={() => {
              navigate("/writereview");
            }}
          />
        ) : (
          <></>
        )}
        {buttonType === "purchasedhistory" && !isReview ? (
          <ExtraSmallButton
            name="후기열람"
            buttonClick={() => {
              navigate("/review");
            }}
          />
        ) : (
          <></>
        )}
      </ItemBtn>
    </StyledItemCard>
  );
}
