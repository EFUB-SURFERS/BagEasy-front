import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
import { useRef, useEffect } from "react";
const MessagesContainer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    //새 메세지를 받으면 맨 아래로 스크롤
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, []);

  return (
    <Wrapper ref={scrollRef}>
      <Date>2023.07.07</Date>
      <div>
        <MyMessage />
        <YourMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <YourMessage />
        <YourMessage />
      </div>
    </Wrapper>
  );
};

export default MessagesContainer;

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
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
