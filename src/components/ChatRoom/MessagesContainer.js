import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
import { useRef, useEffect, useState } from "react";
import { getMessages } from "../../api/chat";

/*
데이터 예시 
senderNo값은 memberId와 같은 값
{
  "email": "bageasyme@gmail.com",
  "chatList": [
    {
      "id": "iderf-23fd-dfasdf",
      "roomId": 2,
      "senderNo": 3,
      "senderName": "young",
      "contentType": "image",
      "content": "https://이미지url",
      "sendDate": "2023-05-20T20:50:13.4478404",
      "mine": true
    },
    {
      "id": "adsf-23fd-dfasdff",
      "roomId": 2,
      "senderNo": 3,
      "senderName": "young",
      "contentType": "text",
      "content": "hello!",
      "sendDate": "2023-05-20T20:50:13.4478404",
      "mine": true
    },
    {
      "id": "aasdf-23fd-adsf2",
      "roomId": 9,
      "senderNo": 4,
      "senderName": "pro1",
      "contentType": "text",
      "content": "거래중이신가요?",
      "sendDate": "2023-05-20T20:52:13.4478404",
      "mine": false
    }
  ]
} */

const MessagesContainer = () => {
  const [messages, setMessages] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: "aasdf-23fd-adsf2",
        roomId: 9,
        senderNo: 4,
        senderName: "pro1",
        contentType: "text",
        content: "거래중이신가요?",
        sendDate: "2023-05-20T20:52:13.4478404",
        mine: false,
      },
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
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

  return (
    <Wrapper ref={scrollRef}>
      <Date>2023.07.07</Date>
      <div>
        {messages &&
          messages.map(message => {
            return message.mine ? (
              <MyMessage
                key={message.id}
                contentType={message.contentType}
                content={message.content}
                sendTime={getSendTime(message.sendDate)}
              />
            ) : (
              <YourMessage
                key={message.id}
                senderNo={message.senderNo}
                senderName={message.senderName}
                contentType={message.contentType}
                content={message.content}
                sendTime={getSendTime(message.sendDate)}
              />
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
