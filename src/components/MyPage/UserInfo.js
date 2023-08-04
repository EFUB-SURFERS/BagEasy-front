import React, { useState, useEffect } from "react";
import styled from "styled-components";
import setting from "../../assets/MyPage/setting.png";
import Modal from "../UpdateUni/Modal";
import { getMyProfile, putSchool } from "../../api/member";
import Profile from "../Common/Profile";

const UserInfo = ({ setIsModalVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [myProfile, setMyProfile] = useState({});
  const [uni, setUni] = useState("");
  const [uniToShow, setUniToShow] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getMyprofileData();
  }, []);

  useEffect(() => {
    if (update) {
      setUniToShow(uni);
      updateSchool(uni);
    }
  }, [update]);

  const updateSchool = async uni => {
    try {
      const res = await putSchool(uni);
      localStorage.setItem("university", uni);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  const getMyprofileData = async () => {
    try {
      const res = await getMyProfile();
      setMyProfile(res);
      res.school ? setUniToShow(res.school) : setUniToShow("");
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  return (
    <>
      <AvatarContainer>
        {myProfile.nickname && (
          <Profile
            nickname={myProfile.nickname}
            width={"100px"}
            height={"100px"}
          />
        )}
      </AvatarContainer>

      <UserInfoContainer>
        <Username>{myProfile.nickname}</Username>
        <UniversityContainer>
          <University>
            {uniToShow ? uniToShow : "학교를 설정해주세요"}
          </University>
          <Icon2
            src={setting}
            alt="setting"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </UniversityContainer>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={uni}
            setUni={setUni}
            setUpdate={setUpdate}
          />
        ) : null}
      </UserInfoContainer>
    </>
  );
};

const AvatarContainer = styled.div`
  margin-top: 46px;
  margin-bottom: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 53px;
`;

const Username = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const UniversityContainer = styled.div`
  display: flex;
  align-items: end;
`;

const University = styled.p`
  margin: 0;
  font-size: 18px;
  color: #848484;
`;

const Icon2 = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer; /* Add this to indicate the icon is clickable */
`;


export default UserInfo;
