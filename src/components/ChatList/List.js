import React from "react";
import { styled } from "styled-components";
import Item from "./Item";
const List = () => {
  return (
    <ChatList>
      <Item />
      <Item />
    </ChatList>
  );
};

export default List;

const ChatList = styled.div`
  padding-top: 15px;
`;
