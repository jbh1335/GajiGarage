import React from "react";
import styled from "styled-components";
import SmallBtn from "../../Atoms/Buttons/SmallBtn";
import Modal from "../../Atoms/Modal/Modal";
import FlexBox from "../../Atoms/FlexBox";
import { useState } from "react";
import SalesList from "../../Templates/Modal/BuyerBody/SalesList";
import SuggestionList from "../../Templates/Modal/BuyerBody/SuggestionList";

const Header = styled.div`
  width: 360px;
  display: flex;
  color: ${({ theme }) => theme.color.white};
`;
const CloseBtn = styled.button`
  width: 40px;
  height: 24px;
  //   background: url("/image/close.svg") norepeat 24px 16px;
  background: url("/image/close.svg");
  background-repeat: no-repeat;
  background-position: 16px 0px;
`;
export default function ModalBuyer({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  const apply = () => {
    closeModal();
  };
  const [isSuggestion, setIsSuggestion] = useState(false);
  return (
    <Modal>
      <div height="24px" className="page-header">
        　
      </div>
      <Header>
        <CloseBtn onClick={closeModal} />
        <div className="page-header" height>
          물건목록
        </div>
      </Header>
      <FlexBox>
        <SmallBtn
          name="제안목록"
          buttonClick={() => {
            setIsSuggestion(false);
          }}
        />
        <SmallBtn
          name="판매목록"
          buttonClick={() => {
            setIsSuggestion(true);
          }}
        />
      </FlexBox>
      {isSuggestion ? <SalesList /> : <SuggestionList />}
    </Modal>
  );
}
