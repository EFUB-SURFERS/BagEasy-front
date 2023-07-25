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
  position: fixed;
  //margin-top: -140px;
  right: 0;
  //z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0;
  /* outline: 1px solid black; */
  height: 97px;
`;

const ChatBtn = styled.div`
  width: 2rem;
  /* border: 1px solid red; */
`;

const ChatImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const MyPageBtn = styled.div`
  width: 2rem;
  margin: 0rem 1rem;
  /* border: 1px solid red; */
`;

const MyPageImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Buttons;
