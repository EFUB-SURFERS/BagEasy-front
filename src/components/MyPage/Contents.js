import React from "react";
import styled from "styled-components";
import list_gray from "../../assets/list_gray.png";
import chat_gray from "../../assets/chat_gray.png";
import heart_gray from "../../assets/heart_gray.png";
import ListItem from "./ListItem";
import UserInfo from "./UserInfo";

const Contents = () => {
  const handleHeartClick = () => {
    window.location.replace("/favorites");
  };

  const handleChatClick = () => {
    window.location.replace("/chats");
  };

  const handleListClick = () => {
    window.location.replace("/deal");
  };

  return (
    <Content>
      <UserInfo />
      <ListContainer>
        <ListItem icon={heart_gray} text="찜 목록" onClick={handleHeartClick}/>
        <Divider />
        <ListItem icon={chat_gray} text="채팅 목록" onClick={handleChatClick}/>
        <Divider />
        <ListItem icon={list_gray} text="거래 내역" onClick={handleListClick}/>
      </ListContainer>
    </Content>
  );
};


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #ffc700;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  border-radius: 10px;
  background-color: #ffee94;
`;

export default Contents;
