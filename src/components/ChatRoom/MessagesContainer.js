import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
import { useRef, useEffect, useState } from "react";
import { getMessages } from "../../api/chat";
import { useParams } from "react-router-dom";

//메세지 전송 날짜 확인 후 바뀌었으면 업데이트
let newDate = "";
let oldDate = "";

//sendDate 스트링을 "PM/AM 시간:분" 으로 변환하는 함수
export const getSendTime = sendDate => {
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
export const checkIsNewDate = sendDate => {
  newDate = sendDate.substr(0, 10);
  if (oldDate === newDate) {
    oldDate = newDate;
    return false;
  } else {
    oldDate = newDate;
    return true;
  }
};
let newMessage;
export const addNewMessage = message => {
  newMessage = message;
};
const MessagesContainer = () => {
  const [DBmessages, setDBMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  //경로에서 roomId 받아오기
  const { roomId } = useParams();

  useEffect(() => {
    //DB에 저장되어있는 채팅 내역 조회 (채팅방 접속 시 한번)
    const res = getMessages(roomId);

    setDBMessages(res.chatList);

    console.log(DBmessages);

    //실시간 + DB 총 메세지 배열
    //setMessages(messages);
    console.log(messages);
  }, []);

  //새 메세지를 받으면 맨 아래로 스크롤
  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([...messages]);
  }, [newMessage]);

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
