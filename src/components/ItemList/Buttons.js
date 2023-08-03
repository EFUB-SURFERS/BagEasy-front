import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMyProfile } from "../../api/member";
import chatImg from "../../assets/itemListPage/chatImg.png";
import Profile from "../Common/Profile";

const Buttons = ({ navigate, setIsModalVisible }) => {
  const [nickname, setNickname] = useState();
  useEffect(() => {
    async function getNickname() {
      try {
        const data = await getMyProfile();
        setNickname(data.nickname);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    getNickname();
  }, []);

  return (
    <ButtonWrapper>
      <ChatBtn onClick={() => navigate("/chats")}>
        <ChatImg src={chatImg} />
      </ChatBtn>
      <MyPageBtn onClick={() => navigate("/mypage")}>
        <Profile nickname={nickname} width="27px" height="27px" />
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
  width: 27px;
  margin: 0 13px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default Buttons;
