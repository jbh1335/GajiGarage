import React, { useRef, useState, useEffect } from "react";
import InputBox from "../../Molecules/InputBox";
import Checkbox from "../../Molecules/CheckBox";
import SmallBtn from "../../Atoms/Buttons/SmallBtn";

import styled from "styled-components";
const StyledBox = styled.div`
  width: 360px;
`;

const StyledNoneCanvas = styled.canvas`
  display: None;
`;

const StyledCanvas = styled.canvas`
  width: 360px;
`;

const StyledDrawCanvas = styled.canvas`
  width: 100px;
  height: 100px;
`;

export default function ProductSubmitBox({ imgSrc }) {
  const originCanvas = useRef(undefined); //원본 그림 저장
  const drawCanvas = useRef(undefined); //실제 그리는 영역
  const resultCanvas = useRef(undefined); //잘라진 영역 확인

  const [startPos, setStartPos] = useState([0, 0]); //클릭시 위치로 시작 위치가 된다.
  const [endPos, setEndPos] = useState([0, 0]);
  const [isdrawing, setIsDrawing] = useState(false); //현재 그리고 있는지 여부

  const [ctx, setCtx] = useState(null); //실제 그리는 영역의 canvas
  const [resultCtx, setResultCtx] = useState(null);

  const [img, setImg] = useState(undefined); //원본 이미지

  const [ratio, setRatio] = useState(0.0); //원본이미지와 canvas의 비율

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
      //원본 캔버스
      originCanvas.current.width = img.width;
      originCanvas.current.height = img.height;
      originCanvas.current.getContext("2d").drawImage(img, 0, 0);

      //실제 그리는 캔버스
      drawCanvas.current.width = img.width;
      drawCanvas.current.height = img.height;
      drawCanvas.current.getContext("2d").drawImage(img, 0, 0);
      setImg(img);

      //확인
      console.log(`${img.width}과 ${img.height}`); //480,360
      console.log(`${drawCanvas.current.width}, ${drawCanvas.current.height}`);
      //캔버스에 그려진 크기  480, 360
      //실제 캔버스 크기 360, 270
      console.log(
        `${resultCanvas.current.width}, ${resultCanvas.current.height}`
      );
    };

    //결과 캔버스
    const result = resultCanvas.current;
    result.width = 100;
    result.height = 100;

    //비율 계산
    setResultCtx(resultCanvas.current.getContext("2d"));
    setCtx(drawCanvas.current.getContext("2d"));

    setRatio(0.75);
  }, [imgSrc]);

  /**
   * 마우스 그리기 시작
   *
   * @param {*} e
   */
  function startDrawing(e) {
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDrawing(true);

    ctx.beginPath(); //선그리기 시작

    setStartPos([offsetX / ratio, offsetY / ratio]); //현제 위치

    ctx.moveTo(offsetX, offsetY); //선 그리기 시작
  }
  /**
   * 마우스 그리기 종료
   * @param {*} e
   */
  function finishDrawing(e) {
    const { offsetX, offsetY } = e.nativeEvent;
    CropImage(offsetX / ratio - startPos[0], offsetY / ratio - startPos[1]);
    setIsDrawing(false);
  }

  /**
   * 사각형 그리기
   * @param {*} e
   * @returns
   */
  function drawSquareImage(e) {
    const { offsetX, offsetY } = e.nativeEvent;
    if (!isdrawing) return;
    //canvas지우기
    ctx.clearRect(0, 0, drawCanvas.current.width, drawCanvas.current.height);
    //이미지 다시 그리기
    ctx.drawImage(img, 0, 0, img.width, img.height);
    //빨간 선
    ctx.strokeStyle = "red";
    //사각형 그리기

    ctx.strokeRect(
      startPos[0],
      startPos[1],
      offsetX / ratio - startPos[0],
      offsetY / ratio - startPos[1]
    );
  }

  /**
   * 이미지 자르기
   * @param {*} width
   * @param {*} height
   */
  function CropImage(width, height) {
    resultCanvas.current.getContext("2d").drawImage(
      img,
      startPos[0], //이미지 x좌표
      startPos[1], //이미지 y좌표
      width, //자를 이미지 크기
      height, //자를 이미지
      0,
      0,
      100,
      100
    );
  }

  return (
    <StyledBox>
      <div>
        <StyledNoneCanvas ref={originCanvas}></StyledNoneCanvas>
        <StyledCanvas
          ref={drawCanvas}
          onMouseUp={finishDrawing}
          onMouseDown={startDrawing}
          onMouseMove={drawSquareImage}
        ></StyledCanvas>
        <button>그리기</button>
        <canvas ref={resultCanvas}></canvas>
        <SmallBtn name="제거"></SmallBtn>
        <SmallBtn name="들록"></SmallBtn>
      </div>
      <InputBox placehold="제품명을 입력하세요" />
      <Checkbox id="price" text="즉시구매가" />
      <InputBox placehold="즉시구매가를 입력하세요" />
    </StyledBox>
  );
}
