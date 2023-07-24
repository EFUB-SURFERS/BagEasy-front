import React from "react";
import styled from "styled-components";
import profileImg2 from "../../assets/itemListPage/profileImg2.png";
import Profile from "../Common/Profile";

const Comment = () => {
  return (
    <Root>
      {/* <Profile>
        <ProfileImg src={profileImg2} />
      </Profile> */}
      <Profile nickname={"Jjm0829"} />
      <Wrapper>
        <Nickname>jjm0829</Nickname>
        <Text>거래 원합니다. 채팅 확인해주세요...</Text>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  background: #ffee94;
  padding: 0.7rem;
  height: 3rem;
  border-bottom: 1px solid grey;
  margin: 0rem 0.7rem;
  /* border: 1px solid lightgrey; */
`;

// const Profile = styled.div`
//   width: 1.4rem;
//   height: 1.4rem;
// `;

// const ProfileImg = styled.img`
//   width: 100%;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 14px;
`;

export default Comment;
