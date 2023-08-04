import React from "react";
import styled from "styled-components";
import list_gray from "../../assets/MyPage/list_gray.png";
import chat_gray from "../../assets/MyPage/chat_gray.png";
import heart_gray from "../../assets/MyPage/heart_gray.png";
import ListItem from "./ListItem";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const Contents = ({ setIsModalVisible  }) => {
  const navigate = useNavigate();
  const handleHeartClick = () => {
    navigate("/favorites");
  };

  const handleChatClick = () => {
    navigate("/chats");
  };

  const handleListClick = () => {
    navigate("/deal");
  };
  

  return (
    <Content>
      <UserInfo setIsModalVisible={setIsModalVisible} />
      <ListContainer>
        <ListItem icon={heart_gray} text="찜 목록" onClick={handleHeartClick} />
        <Divider />
        <ListItem icon={chat_gray} text="채팅 목록" onClick={handleChatClick} />
        <Divider />
        <ListItem icon={list_gray} text="거래 내역" onClick={handleListClick} />
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
  background: #c3c3c3;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export default Contents;
