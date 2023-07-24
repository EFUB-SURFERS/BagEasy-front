import React from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";

const Comment = () => {
  return (
    <Root>
      {/* <Profile>
        <ProfileImg src={profileImg2} />
      </Profile> */}
      <Profile nickname={"Jjm0829"} width="23px" height="23px" />
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
  padding: 13px 7px;
  height: 68px;
  box-sizing: border-box;
  margin: 0rem 13px;
  & + & {
    border-top: 1px solid #a7a7a7;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const Text = styled.div`
  font-size: 13px;
`;

export default Comment;
