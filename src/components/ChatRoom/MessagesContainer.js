import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";

const MessagesContainer = () => {
  return (
    <Wrapper>
      <Date>2023.07.07</Date>
      <div>
        <MyMessage />
        <YourMessage />
        <YourMessage />
        <MyMessage />
        <YourMessage />
        <MyMessage />
        <YourMessage />
        <MyMessage />
        <MyMessage />
      </div>
    </Wrapper>
  );
};

export default MessagesContainer;
const Wrapper = styled.div`
  /*상단 고정 헤더 높이 만큼 padding*/
  padding-top: 97px;
  padding-bottom: 90px;
`;
const Date = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  color: #6d6d6d;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
