import React from "react";
import { styled } from "styled-components";
import Profile from "../Common/Profile";
//유저인포 겟으로 프로필이미지 얻기
//로그인 완료되면 api 작업
const YourMessage = ({
  yourNickname,
  content,
  sendTime,
  sendDate,
  type,
  readCount,
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
          {type === 1 ? (
            <ImageContainer>
              <img src={content} alt="" />
            </ImageContainer>
          ) : (
            <Text>{content}</Text>
          )}
        </div>
        <Time>
          {readCount === 1 && <div className="count">{readCount}</div>}
          {sendTime}
        </Time>
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
    max-height: 150px;
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

  .count {
    display: flex;
    justify-content: start;
    font-size: 10px;
    color: #50115a;
  }
`;
const Text = styled.div`
  max-width: 192px;
  border-radius: 0px 25.997px 25.997px 25.997px;
  background: #f4f4f4;
  padding: 8.07px 18px 8.07px 18px;
  margin-left: 8px;
  margin-right: 7px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
