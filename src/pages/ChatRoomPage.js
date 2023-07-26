import React, { useRef, useEffect } from "react";
import Header from "../components/ChatRoom/Header";
import Form from "../components/ChatRoom/Form";
import MessagesContainer from "../components/ChatRoom/MessagesContainer";
import { styled } from "styled-components";
import { connectClient, disconnectClient } from "../api/stomp";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const formRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const { roomId } = useParams();

  useEffect(() => {
    //클라이언트 생성 및 연결
    connectClient(roomId);

    //form 높이에 따른 messagesContainer 사이즈 조정
    const resizeObserver = new ResizeObserver(entries => {
      const formHeight = entries[0].contentRect.height;
      if (messagesContainerRef.current) {
        messagesContainerRef.current.style.bottom = `${formHeight}px`;
      }
    });

    resizeObserver.observe(formRef.current);

    return () => disconnectClient();
  }, []);

  return (
    <Wrapper>
      <div className="header"></div>
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
