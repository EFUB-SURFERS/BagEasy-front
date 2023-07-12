import React from "react";
import styled from "styled-components";
import profileImg2 from "../../assets/profileImg2.png";

const Comment = () => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImg src={profileImg2} />
      </Profile>
      <Text>거래 원합니다. 채팅 확인해주세요...</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffee94;
  padding: 0.7rem;
  /* border: 1px solid lightgrey; */
  /* height: 74px; */
  height: 2rem;
`;

const Profile = styled.div`
  width: 1.4rem;
`;

const ProfileImg = styled.img`
  width: 100%;
`;

const Text = styled.div`
  font-size: 14px;
  margin-left: 0.7rem;
`;

export default Comment;
