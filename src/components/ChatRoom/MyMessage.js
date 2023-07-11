import React from "react";
import { styled } from "styled-components";

const MyMessage = () => {
  return (
    <Wrapper>
      <Time>PM 2:00</Time>
      <Text>안녕하세요~ 물건 구매하고 싶습니다!</Text>
    </Wrapper>
  );
};

export default MyMessage;
const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
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
  background: #ffee94;
  padding: 8.07px 14px 8.07px 14px;
  margin-left: 7px;
  margin-right: 12px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
