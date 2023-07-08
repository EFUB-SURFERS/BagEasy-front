import React from "react";
import Header from "../components/ChatRoom/Header";
import Form from "../components/ChatRoom/Form";
import MessagesContainer from "../components/ChatRoom/MessagesContainer";
const ChatRoom = () => {
  return (
    <div>
      <Header />
      <MessagesContainer />
      <Form />
    </div>
  );
};

export default ChatRoom;
