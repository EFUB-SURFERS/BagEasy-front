import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
import { useRef, useEffect, useState } from "react";
import { getMessages } from "../../api/chat";
import { useParams } from "react-router-dom";
const MessagesContainer = () => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  //경로에서 roomId 받아오기
  const { roomId } = useParams();

  useEffect(() => {
    //채팅 리스트 조회 (채팅 내역)
    //const res = getMessages(roomId);
    //setMessages(res.chatList);
    setMessages([
      {
        id: "iderf-23fd-dfasdf",
        roomId: 2,
        senderNo: 3,
        senderName: "young",
        contentType: "image",
        content: "https://이미지url",
        sendDate: "2023-05-20T20:50:13.4478404",
        mine: true,
      },
      {
        id: "adsf-23fd-dfasdff",
        roomId: 2,
        senderNo: 3,
        senderName: "young",
        contentType: "text",
        content: "hello!",
        sendDate: "2023-05-20T20:50:13.4478404",
        mine: true,
      },
      {
        id: "aasdf-23fd-adsf2",
        roomId: 9,
        senderNo: 4,
        senderName: "pro1",
        contentType: "text",
        content: "거래중이신가요?",
        sendDate: "2023-05-21T20:52:13.4478404",
        mine: false,
      },
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();

    //메세지 전송 날짜 확인, 업데이트
  }, [messages]);

  //새 메세지를 받으면 맨 아래로 스크롤
  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };
  //sendDate 스트링을 "PM/AM 시간:분" 으로 변환하는 함수
  const getSendTime = sendDate => {
    const hour = sendDate.substr(11, 2);
    const minutes = sendDate.substr(14, 2);
    if (hour < "12") {
      return `AM ${hour}:${minutes}`;
    } else if (hour === "12") {
      return `PM ${hour}:${minutes}`;
    } else {
      return `PM 0${hour % 12}:${minutes}`;
    }
  };

  let newDate = "";
  let oldDate = "";

  const checkIsNewDate = sendDate => {
    newDate = sendDate.substr(0, 10);
    if (oldDate === newDate) {
      oldDate = newDate;
      return false;
    } else {
      oldDate = newDate;
      return true;
    }
  };
  return (
    <Wrapper ref={scrollRef}>
      <div>
        {messages &&
          messages.map(message => {
            return message.mine ? (
              <>
                <MyMessage
                  key={message.id}
                  contentType={message.contentType}
                  content={message.content}
                  sendTime={getSendTime(message.sendDate)}
                  sendDate={{
                    isNewDate: checkIsNewDate(message.sendDate),
                    date: message.sendDate.substr(0, 10),
                  }}
                />
              </>
            ) : (
              <>
                <YourMessage
                  key={message.id}
                  senderNo={message.senderNo}
                  senderName={message.senderName}
                  contentType={message.contentType}
                  content={message.content}
                  sendTime={getSendTime(message.sendDate)}
                  sendDate={{
                    isNewDate: checkIsNewDate(message.sendDate),
                    date: message.sendDate.substr(0, 10),
                  }}
                />
              </>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default MessagesContainer;

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;
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
