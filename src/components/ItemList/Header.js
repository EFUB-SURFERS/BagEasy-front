import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import logo from "../../assets/itemListPage/logo.png";
import { useNavigate } from "react-router-dom";
import { getMyProfile } from "../../api/member";
import location from "../../assets/itemListPage/location.png";
import notification from "../../assets/itemListPage/notification.png";
import chat from "../../assets/itemListPage/chat.png";
import Profile from "../Common/Profile";
import Modal from "./../UpdateUni/Modal";
import Toggle from "./Toggle";

const Header = ({
  uniSearch,
  setUniSearch,
  onToggle,
  onSales,
  setRefresh,
  setIsModalVisible,
}) => {
  const [nickname, setNickname] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  //프로필의 학교정보 가져오기
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMyProfile();
        !uniSearch && setUniSearch(data.school);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    fetchData();
  }, []);

  //학교 검색명 업데이트
  useEffect(() => {
    if (!isOpen && update) {
      setUniSearch(uni);
      localStorage.setItem("university", uni);
      setRefresh(prev => prev + 1);
    }
  }, [isOpen]);

  //유저의 닉네임 조회
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
    <Root>
      <Wrapper>
        <Logo
          onClick={() => {
            navigate("/home");
          }}
        >
          <Img src={logo} alt="로고" />
        </Logo>
        <ButtonWrapper>
          <UniversityBtn onClick={() => setIsOpen(true)}>
            <Img src={location} />
          </UniversityBtn>
          <NotificationBtn>
            <Img src={notification} />
          </NotificationBtn>
          <ChatBtn onClick={() => navigate("/chats")}>
            <Img src={chat} />
          </ChatBtn>
          <MyPageBtn onClick={() => navigate("/mypage")}>
            <Profile nickname={nickname} width="22px" height="22px" />
          </MyPageBtn>
        </ButtonWrapper>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={uni}
            setUni={setUni}
            setUpdate={setUpdate}
          />
        ) : null}
      </Wrapper>
      <ToggleWrapper>
        <Toggle onToggle={onToggle} onSales={onSales} />
      </ToggleWrapper>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  height: 40px;
  padding: 0px 14px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 160px;
  margin-left: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const UniversityBtn = styled.div`
  width: 17px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const NotificationBtn = styled.div`
  margin-left: 10px;
  width: 17px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ChatBtn = styled.div`
  margin-left: 10px;
  width: 20px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const MyPageBtn = styled.div`
  margin-left: 9px;
  &:hover {
    cursor: pointer;
  }
`;
