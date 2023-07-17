import React, { useRef, useEffect } from "react";
import Header from "../components/ChatRoom/Header";
import Form from "../components/ChatRoom/Form";
import MessagesContainer from "../components/ChatRoom/MessagesContainer";
import { styled } from "styled-components";
import * as StompJs from "@stomp/stompjs";

const ChatRoom = () => {
  const formRef = useRef(null);
  const messagesContainerRef = useRef(null);

  //stompjs: 채팅방 접속시 클라이언트 생성
  const client = new StompJs.Client({
    brokerURL: "ws://엔드포인트",
    connectHeaders: {
      //백에서 요구하는대로 수정
      login: "user",
      passcode: "password",
      //Authorization: `${token}`,
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  client.onConnect = function (frame) {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect

    const callback = ({ message }) => {
      //서버에서 메세지 받으면 실행하는 함수
      //리스트 겟해오는건.. 어떻게 되는걸까..
      if (message.body) {
        alert("got message with body " + message.body);

        const datas = JSON.parse(message.body);
        console.log("message", datas);
      } else {
        alert("got empty message");
      }
    };

    //stompjs: 서버 구독
    client.subscribe("/주소", callback);
  };

  client.onStompError = function (frame) {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log("Broker reported error: " + frame.headers["message"]);
    console.log("Additional details: " + frame.body);
  };

  client.activate();

  useEffect(() => {
    //form 높이에 따른 messagesContainer 사이즈 조정
    const resizeObserver = new ResizeObserver(entries => {
      const formHeight = entries[0].contentRect.height;
      if (messagesContainerRef.current) {
        messagesContainerRef.current.style.bottom = `${formHeight}px`;
      }
    });

    resizeObserver.observe(formRef.current);
  }, []);

  return (
    <Wrapper>
      <div className="header">
        <Header client={client} />
      </div>
      <div className="messagescontainer" ref={messagesContainerRef}>
        <MessagesContainer />
      </div>
      <div className="form" ref={formRef}>
        <Form />
      </div>
    </Wrapper>
  );
};

export default ChatRoom;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
  }
  .messagescontainer {
    position: fixed;
    top: 97px;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .form {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: -1;
  }
`;
