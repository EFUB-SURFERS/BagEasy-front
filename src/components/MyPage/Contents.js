import React from "react";
import styled from "styled-components";
import list_gray from "../../assets/MyPage/list_gray.png";
import chat_gray from "../../assets/MyPage/chat_gray.png";
import heart_gray from "../../assets/MyPage/heart_gray.png";
import notification from "../../assets/itemListPage/notification.png";
import x from "../../assets/itemListPage/x.png";
import ListItem from "./ListItem";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const Contents = ({
  setIsModalVisible,
  setIsMypageModalVisible,
  isMypageModalVisible,
}) => {
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
      <IconContainer>
        <CloseIcon
          src={x}
          onClick={() => setIsMypageModalVisible(!isMypageModalVisible)}
        />
        <Img src={notification} onClick={() => navigate("/notification")} />
      </IconContainer>
      <UserInfo setIsModalVisible={setIsModalVisible} />
      <ListContainer>
        <ListItem icon={heart_gray} text="찜 목록" onClick={handleHeartClick} />
        <Divider />
        <ListItem icon={chat_gray} text="채팅 목록" onClick={handleChatClick} />
        <Divider />
        <ListItem icon={list_gray} text="거래 내역" onClick={handleListClick} />
      </ListContainer>
      <BtnContainer>
        <Btn>로그아웃</Btn>
        <p style={{ color: "#9B9B9B" }}>|</p>
        <Btn>탈퇴하기</Btn>
      </BtnContainer>
    </Content>
  );
};

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 17px;
  cursor: pointer;
  display: block;
  padding-right: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 4rem;
`;

const Btn = styled.button`
  background-color: white;
  border: none;
  color: #9b9b9b;
  font-size: 14px;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

const CloseIcon = styled.img`
  width: 18px;
  padding-left: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 100vh;
  width: 85vw;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background: #c3c3c3;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
`;

export default Contents;
