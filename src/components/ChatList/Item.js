import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const Item = ({ roomId, createMember, joinMember, postId, latestMessage }) => {
  //createMember, joinMember 중 자신 memberId 비교 후 상대방 프로필이미지, 이름 겟해오기
  //안 읽은 메세지 수 표시 어떻게??
  const navigate = useNavigate();

  useEffect(() => {
    console.log(getElapsedTime(latestMessage.sentAt));
  }, []);
  const getElapsedTime = sentAt => {
    const date = new Date(sentAt);
    const elapsedSec = new Date().getTime() - date.getTime();

    //지난 분,시간,일,개월,년
    const elapsedMin = elapsedSec / (1000 * 60);
    const elapsedHour = elapsedMin / 60;
    const elapsedDay = elapsedHour / 24;
    const elapsedMonth = elapsedDay / 30;
    const elapsedYear = elapsedMonth / 12;

    if (elapsedMin >= 60) {
      if (elapsedHour >= 24) {
        if (elapsedDay >= 30) {
          if (elapsedMonth >= 12) {
            return Math.floor(elapsedYear) + "년 전";
          }
          return Math.floor(elapsedMonth) + "개월 전";
        }
        return Math.floor(elapsedDay) + "일 전";
      }
      return Math.floor(elapsedHour) + "시간 전";
    }
    return Math.floor(elapsedMin) + "분 전";
  };
  return (
    <Wrapper>
      <ChatItem
        onClick={() => {
          navigate(`/chats/${roomId}`);
        }}
      >
        <p className="img">
          <img src={""} alt="" />
        </p>
        <div className="mainContainer">
          <p className="name">Jimin_Song</p>
          <p className="text">{latestMessage.context}</p>
        </div>
        <div className="subContainer">
          <p className="time">{getElapsedTime(latestMessage.sentAt)}</p>
          <p className="count">3</p>
        </div>
      </ChatItem>
      <Line />
    </Wrapper>
  );
};

export default Item;

const ChatItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
  }
  .img {
    margin: 15px 0px 30px 0px;
    width: 67px;
    height: 67px;
    display: flex;
    border-radius: 35px;
    background: #a1a1a1;
  }
  .name {
    margin: 27px 0px 0px 44px;
    width: 138px;
    height: 23px;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .time {
    margin: 32px 0px 0px 0px;
    width: 48px;
    color: #979797;
    text-align: right;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text {
    margin-left: 42px;
    width: 176px;
    height: 40px;
    color: #979797;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .count {
    margin-top: 5px;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background: #3deb63;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .mainContianer {
    width: 176px;
  }
  .subContainer {
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
const Line = styled.div`
  width: 90%;
  height: 0.5px;
  background: #d9d9d9;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
