import React, { useState, useEffect } from "react";
import styled from "styled-components";
import myPageImg from "../../assets/myPageImg.png";
import setting from "../../assets/setting.png";
import Modal from "../UpdateUni/Modal";
import { getMyProfile, putSchool } from "../../api/member";
import Profile from "../Common/Profile";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myProfile, setMyProfile] = useState({});
  const [uni, setUni] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getMyprofileData();
  }, []);

  useEffect(() => {
    if (update) {
      updateSchool(uni);
      console.log("몇번");
    }
  }, [update]);

  const updateSchool = async uni => {
    try {
      const res = await putSchool(uni);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getMyprofileData = async () => {
    try {
      const res = await getMyProfile();
      setMyProfile(res);
      res.school ? setUni(res.school) : setUni("");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    myProfile && (
      <>
        <AvatarContainer>
          <Profile
            nickname={myProfile.nickname}
            width={"100px"}
            height={"100px"}
          />
        </AvatarContainer>

        <UserInfoContainer>
          <Username>{myProfile.nickname}</Username>
          <UniversityContainer>
            <University>{uni ? uni : "학교를 설정해주세요"}</University>
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

        <Line />
      </>
    )
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
