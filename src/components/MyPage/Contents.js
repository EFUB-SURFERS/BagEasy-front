import React from "react";
import styled from "styled-components";
import menubar from "../../assets/menubar.png";
import chatImg from "../../assets/chatImg.png";
import heart from "../../assets/heart.png";
import ListItem from "./ListItem";
import UserInfo from "./UserInfo";

const Contents = () => {
  return (
    <Content>
      <UserInfo />
      <ListContainer>
        <ListItem icon={heart} text="찜 목록" />
        <Divider />
        <ListItem icon={chatImg} text="채팅 목록" />
        <Divider />
        <ListItem icon={menubar} text="거래 내역" />
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
