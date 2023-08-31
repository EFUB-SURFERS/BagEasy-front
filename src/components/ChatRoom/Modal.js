import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { FinishDeal } from "../../api/posts";
const Modal = ({
  setIsUpdate,
  isUpdate,
  isOpen,
  setIsOpen,
  postId,
  buyerNickname,
  setIsModalVisible,
}) => {
  const handleItemClick = () => {
    try {
      //거래 성사 요청 보내기
      FinishDeal(postId, buyerNickname);
      setIsUpdate(true);
      setIsOpen(false);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  return (
    <>
      <Layer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Layer>
      <Container>
        <p className="title">거래를 확정하시겠습니까?</p>
        <p className="gray">거래 확정 뒤에는 취소가 불가합니다.</p>
        <Btn onClick={handleItemClick}>확정</Btn>
      </Container>
    </>
  );
};

export default Modal;

const Btn = styled.div`
  width: 172.93px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #0e312b;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 33px auto 0px;
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

  .title {
    color: #383200;
    width: 65%;
    margin-left: 8%;
    margin-top: 22px;

    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .gray {
    width: 65%;
    margin-left: 8%;
    margin-top: 19px;
    color: #848484;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .btn {
  }
`;
