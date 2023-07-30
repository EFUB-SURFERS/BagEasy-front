import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
import { getChatRooms } from "../../api/chat";

const List = () => {
  const [chatRooms, setChatRooms] = useState([]);
  let yourNickname = "";
  const myNickname = localStorage.getItem("myNickname");
  useEffect(() => {
    getChatRoomsData();
  }, []);

  const getChatRoomsData = async () => {
    const res = await getChatRooms();
    setChatRooms(res);
  };

  return (
    <>
      <ChatList>
        {chatRooms &&
          chatRooms.map(room => {
            //내가 구매자인경우 상대는 판매자
            myNickname === room.createMember
              ? (yourNickname = room.joinMember)
              : (yourNickname = room.createMember);

            return (
              <Item
                key={room.roomId}
                createMember={room.createMember}
                joinMember={room.joinMember}
                yourNickname={yourNickname}
                roomId={room.roomId}
                postId={room.postId}
                latestMessage={room.latestMessage}
              />
            );
          })}
      </ChatList>
    </>
  );
};

export default List;
const ChatList = styled.div`
  padding-top: 112px;
`;
