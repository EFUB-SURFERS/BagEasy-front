import React from "react";
import { styled } from "styled-components";
const YourMessage = () => {
  return (
    <Wrapper>
      <img src={"image"}></img>
      <div>
        <Name>Jimin_Song</Name>
        <Text>네~ 3만원입니다!</Text>
      </div>
      <Time>PM 2:00</Time>
    </Wrapper>
  );
};

export default YourMessage;
const Wrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: start;

  img {
    margin-left: 12px;
    background: #d9d9d9;
    width: 36px;
    height: 36px;
    border-radius: 36px;
  }
`;
const Name = styled.div`
  margin-left: 8px;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Time = styled.div`
  align-self: flex-end;
  color: #848484;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Text = styled.div`
  max-width: 192px;
  border-radius: 15px;
  background: #e9f6b7;
  padding: 8.07px 14px 8.07px 14px;
  margin-left: 8px;
  margin-right: 7px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
