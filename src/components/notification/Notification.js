import React from "react";
import { styled } from "styled-components";
import Profile from "../Common/Profile";
import itemImg from "../../assets/itemListPage/itemImg.png";

const Notification = () => {
  return (
    <Root>
      <ProfileWrapper>
        <Profile nickname="nickname" width="40px" height="40px" />
      </ProfileWrapper>
      <TextWrapper>
        <Wrapper>
          <Nickname>catcat</Nickname>
          <Text>님이 비밀댓글을 달았습니다.</Text>
          <Day>2시간</Day>
        </Wrapper>
        <Content>거래 원합니다. 채팅 확인해주세요. 답변 기다립니다.</Content>
      </TextWrapper>
      <ImageWrapper>
        <Image src={itemImg} />
      </ImageWrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  height: 62px;
`;

const ProfileWrapper = styled.div`
  flex: none;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  font-weight: 500;
  overflow: hidden;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const Nickname = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const Text = styled.div`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Day = styled.div`
  font-size: 10px;
  margin-left: 10px;
  color: #848484;
  white-space: nowrap;
`;

const Content = styled.div`
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ImageWrapper = styled.div`
  width: 43px;
  margin-left: auto;
  flex: none;
`;

const Image = styled.img`
  width: 100%;
`;

export default Notification;
