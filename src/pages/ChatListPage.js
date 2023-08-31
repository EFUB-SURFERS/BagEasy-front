import React from "react";
import Header from "../components/Common/Header.js";
import List from "../components/ChatList/List.js";
const ChatListPage = () => {
  return (
    <div>
      <Header isMenu={false} />
      <List />
    </div>
  );
};

export default ChatListPage;
