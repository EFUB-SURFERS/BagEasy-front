import React from "react";
import { styled } from "styled-components";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
import { useRef, useEffect, useState } from "react";
import { getMessages } from "../../api/chat";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//sentAt 밀리세컨드를 "PM/AM 시간:분" 으로 변환하는 함수
const getSendTime = sentAt => {
  const sendDate = new Date(
    sentAt - new Date().getTimezoneOffset() * 60 * 1000,
  );
  const hour = sendDate.getHours();
  let minutes = sendDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 12) {
    return `AM ${hour}:${minutes}`;
  } else if (hour === 12) {
    return `PM ${hour}:${minutes}`;
  } else {
    return `PM ${hour % 12}:${minutes}`;
  }
};

const MessagesContainer = () => {
  const [DBmessages, setDBMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [yourNickname, setYourNickname] = useState("");
  const [realtimeMessages, setRealTimeMessages] = useState([]);

  const scrollRef = useRef(null);

  //경로에서 roomId 받아오기
  const { roomId } = useParams();

  //리덕스 스토어에서 실시간 메세지 가져오는 함수 (메세지 받을 때 마다 추가되고 자신의 연결 끊기면 초기화)
  const newMessage = useSelector(state => state);

  const getTotalMessage = async () => {
    //db에 있던 채팅기록 + 접속 중이지 않을때 받은 채팅 기록 가져오기
    const res = await getMessages(roomId);
    res && setDBMessages(res.chatList);
    setYourNickname(res.nickname);
    addRealTimeMessages(res.chatList);
  };
  const addRealTimeMessages = db => {
    //접속 중이지 않을 때 상대에게 도착한 메세지 있다면 추가
    const firstData = realtimeMessages && [...db, ...realtimeMessages];
    setMessages(firstData);
  };

  useEffect(() => {
    //접속시 db에 있던 채팅 기록 가져오기
    getTotalMessage();
    console.log();
  }, []);

  useEffect(() => {
    //양쪽 접속 중일때 실시간으로 보내고 받은 메세지 가져오기 ( DB 조회 X )
    newMessage && setMessages([...messages, newMessage]);
  }, [newMessage]);

  //새 메세지를 받으면 맨 아래로 스크롤
  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  let date = "";
  //메세지 전송 날짜 확인 후 바뀌었으면 업데이트
  const checkIsNewDate = sentAt => {
    const sendDate = new Date(
      sentAt - new Date().getTimezoneOffset() * 60 * 1000,
    );
    const newDate = `${sendDate.getFullYear()}.${sendDate.getMonth()}.${sendDate.getDate()}`;
    if (date === newDate) {
      return { isNewDate: false, date: newDate };
    } else {
      date = newDate;
      return { isNewDate: true, date: newDate };
    }
  };

  return (
    <Wrapper ref={scrollRef}>
      <div>
        {messages &&
          messages.map(message => {
            console.log(getSendTime(message.sentAt));
            return message.mine ? (
              <>
                <MyMessage
                  key={message.id || message.sentAt}
                  contentType={message.contentType}
                  content={message.content}
                  sendTime={getSendTime(message.sentAt)}
                  sendDate={checkIsNewDate(message.sentAt)}
                />
              </>
            ) : (
              <>
                <YourMessage
                  key={message.id || message.sentAt}
                  senderName={message.senderName}
                  contentType={message.contentType}
                  content={message.content}
                  sendTime={getSendTime(message.sentAt)}
                  sendDate={checkIsNewDate(message.sentAt)}
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
