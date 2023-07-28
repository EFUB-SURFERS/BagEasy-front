import React from "react";
import { styled } from "styled-components";
import Profile from "../Common/Profile";
//유저인포 겟으로 프로필이미지 얻기
//로그인 완료되면 api 작업
const YourMessage = ({
  yourNickname,
  contentType,
  content,
  sendTime,
  sendDate,
}) => {
  return (
    <>
      {sendDate.isNewDate && <Date>{sendDate.date}</Date>}
      <Wrapper>
        <div className="profileImg">
          {yourNickname && (
            <Profile
              nickname={yourNickname}
              width={"36px"}
              height={"36px"}
            ></Profile>
          )}
        </div>
        <div>
          <Name>{yourNickname}</Name>
          {contentType === "image" ? (
            <ImageContainer>
              <img src={content} alt="" />
            </ImageContainer>
          ) : (
            <Text>{content}</Text>
          )}
        </div>
        <Time>{sendTime}</Time>
      </Wrapper>
    </>
  );
};

export default YourMessage;
const Date = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  color: #6d6d6d;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageContainer = styled.div`
  margin-left: 7px;
  margin-right: 12px;

  img {
    max-width: 235px;
    border-radius: 10px;
  }
`;
const Wrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: start;

  .profileImg {
    margin-left: 12px;
    background: #d9d9d9;
    width: 36px;
    height: 36px;
    border-radius: 36px;
  }
`;
const Name = styled.div`
  margin-left: 8px;
  margin-bottom: 5px;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Time = styled.div`
  align-self: flex-end;
  color: #848484;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Text = styled.div`
  max-width: 192px;
  border-radius: 15px;
  background: #e9f6b7;
  padding: 8.07px 14px 8.07px 14px;
  margin-left: 8px;
  margin-right: 7px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
