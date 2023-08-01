import React, { useRef, useEffect, useState } from "react";
import Header from "../components/ChatRoom/Header";
import Form from "../components/ChatRoom/Form";
import MessagesContainer from "../components/ChatRoom/MessagesContainer";
import { styled } from "styled-components";
import { connectClient, disconnectClient } from "../api/stomp";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewMessage } from "../Redux/chatRedux";
import { getMyProfile } from "../api/member";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
const ChatRoom = () => {
  const formRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const { roomId } = useParams();

  const dispatch = useDispatch();
  const onNewMessage = newMessage => dispatch(addNewMessage(newMessage));
  const [isModalVisible, setIsModalVisible] = useState("false");
  const getMynickname = async () => {
    const res = await getMyProfile();
    localStorage.setItem("myNicknameForChat", res.nickname);
  };

  function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      // 웹 앱이 포그라운드로 돌아왔을 때 소켓 재연결 요청
      connectClient(roomId, onNewMessage);
    }
  }

  useEffect(() => {
    //클라이언트 생성 및 연결
    try {
      connectClient(roomId, onNewMessage);
      getMynickname();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
    //form 높이에 따른 messagesContainer 사이즈 조정
    const resizeObserver = new ResizeObserver(entries => {
      const formHeight = entries[0].contentRect.height;
      if (messagesContainerRef.current) {
        messagesContainerRef.current.style.bottom = `${formHeight}px`;
      }
    }, []);

    resizeObserver.observe(formRef.current);

    return () => disconnectClient();
  }, []);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  });
  return (
    <>
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
      <Wrapper>
        <div className="header">
          <Header />
        </div>
        <div className="messagescontainer" ref={messagesContainerRef}>
          <MessagesContainer />
        </div>
        <div className="form" ref={formRef}>
          <Form />
        </div>
      </Wrapper>
    </>
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
