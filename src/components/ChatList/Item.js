import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Profile from "../../components/Common/Profile";
const Item = ({ roomId, latestMessage, yourNickname, isRead = true }) => {
  const navigate = useNavigate();

  const getElapsedTime = sentAt => {
    const elapsedSec =
      new Date().getTime() -
      sentAt +
      new Date().getTimezoneOffset() * 60 * 1000;

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
        <div className="img">
          <Profile nickname={yourNickname} width={"67px"} height={"67px"} />
        </div>
        <div className="mainContainer" $isRead={isRead}>
          <p className="name">{yourNickname}</p>
          {latestMessage && <p className="text">{latestMessage.content}</p>}
        </div>
        <div className="subContainer">
          {latestMessage && (
            <p className="time">{getElapsedTime(latestMessage.sentAt)}</p>
          )}
          {!isRead && <p className="count">3</p>}
        </div>
      </ChatItem>
      <Line />
    </Wrapper>
  );
};

export default Item;

const ChatItem = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 19px;
  p {
    margin: 0;
  }
  .img {
    width: 67px;
    height: 67px;
    display: flex;
    border-radius: 35px;
    background: #a1a1a1;
  }
  .name {
    width: 100%;
    height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
  }
  .time {
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
    margin-top: 5px;
    width: 176px;
    height: 40px;

    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .count {
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background: #b476e5;

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
  .mainContainer {
    color: ${props => (props.$isRead ? "#C2C2C2" : "#000")};
    width: 210px;
    padding-left: 19px;
    padding-top: 18px;
    height: 100%;
    box-sizing: border-box;
  }
  .subContainer {
    padding-top: 20px;
    padding-bottom: 22px;
    height: 100%;
    box-sizing: border-box;
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background: #d9d9d9;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
