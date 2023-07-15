import React from "react";
import { styled } from "styled-components";

const Modal = ({
  isOpen,
  setIsOpen,
  isFinished,
  setIsFinished,
  isSold,
  setIsSold,
}) => {
  const handleItemClick = () => {
    setIsOpen(false);
    //거래 성사 요청 보내기
    setIsFinished(!isFinished);
    setIsSold(!isSold);

    console.log(isFinished, isSold);
  };

  return (
    <>
      <Layer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Layer>
      <Container>
        <p className="yellow">거래를 확정하시겠습니까?</p>
        <p className="gray">거래 확정 뒤에는 취소가 불가합니다.</p>
        <Btn onClick={handleItemClick}>확정</Btn>
      </Container>
    </>
  );
};

export default Modal;

const Btn = styled.div`
  display: flex;
  width: 48.129px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 50.07px;
  height: 31px;
  border-radius: 100px;
  background: #ffc701;
  margin-top: 13px;
  margin-left: 244px;
`;
const Layer = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  width: 80%;
  height: 154px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .yellow {
    margin-left: 32px;
    margin-top: 30px;
    color: #eeba00;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .gray {
    margin-left: 32px;
    margin-top: 19px;
    color: #848484;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;
