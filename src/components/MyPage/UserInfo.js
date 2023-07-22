import React, { useState } from "react";
import styled from "styled-components";
import myPageImg from "../../assets/myPageImg.png";
import setting from "../../assets/setting.png";
import Modal from "../UpdateUni/Modal";

const UserInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSettingClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <AvatarContainer>
        <AvatarImage src={myPageImg} alt="Avatar" />
      </AvatarContainer>
      <UserInfoContainer>
        <Username>8282duck</Username>
        <UniversityContainer>
          <University>Ewha Woman's University</University>
          <Icon2 src={setting} alt="setting" onClick={handleSettingClick} />
        </UniversityContainer>
        {isModalVisible && <Modal closeModal={closeModal} />}
      </UserInfoContainer>
      <Line />
    </>
  );
};

const AvatarContainer = styled.div`
  margin-top: 46px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
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

const Line = styled.div`
  width: 400px;
  height: 0.5px;
  background-color: #d9d9d9;
  margin-bottom: 10px;
`;


export default UserInfo;
