import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const Item = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ChatItem
        onClick={() => {
          navigate("/chats/1");
        }}
      >
        <p className="img">
          <img src={""} alt="프로필이미지" />
        </p>
        <div className="mainContainer">
          <p className="name">Jimin_Song</p>
          <p className="text">안녕하세요 구매하고싶어요</p>
        </div>
        <div className="subContainer">
          <p className="time">3시간 전</p>
          <p className="count">3</p>
        </div>
      </ChatItem>
      <Line />
    </Wrapper>
  );
};

export default Item;

const ChatItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
  }
  .img {
    margin: 15px 0px 30px 0px;
    width: 67px;
    height: 67px;
    display: flex;
    border-radius: 35px;
    background: #a1a1a1;
  }
  .name {
    margin: 27px 0px 0px 44px;
    width: 138px;
    height: 23px;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .time {
    margin: 32px 0px 0px 0px;
    width: 48px;
    color: #979797;
    text-align: right;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text {
    margin-left: 42px;
    width: 176px;
    height: 40px;
    color: #979797;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .count {
    margin-top: 5px;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background: #3deb63;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .mainContianer {
    width: 176px;
  }
  .subContainer {
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
const Line = styled.div`
  width: 90%;
  height: 0.5px;
  background: #d9d9d9;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
