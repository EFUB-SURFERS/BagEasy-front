import React from "react";
import styled from "styled-components";
import chatImg from "../../assets/itemListPage/chatImg.png";
import myPageImg from "../../assets/itemListPage/myPageImg.png";

const Buttons = ({ navigate }) => {
  return (
    <ButtonWrapper>
      <ChatBtn onClick={() => navigate("/chats")}>
        <ChatImg src={chatImg} />
      </ChatBtn>
      <MyPageBtn onClick={() => navigate("/mypage")}>
        <MyPageImg src={myPageImg} />
      </MyPageBtn>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0;
  height: 70px;
`;

const ChatBtn = styled.div`
  margin-top: 2px;
  width: 28px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ChatImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const MyPageBtn = styled.div`
  width: 28px;
  margin: 0 13px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const MyPageImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Buttons;
