import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
import { getChatRooms } from "../../api/chat";

const List = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [yourNickname, setYourNickname] = useState("");

  useEffect(() => {
    getChatRoomsData();
  }, []);

  const getChatRoomsData = async () => {
    const res = await getChatRooms();
    setChatRooms(res);

    const myNickname = localStorage.getItem("myNickname");
    myNickname === res.createMember
      ? setYourNickname(res.joinMember)
      : setYourNickname(res.createMember);
  };

  return (
    <>
      <ChatList>
        {chatRooms &&
          yourNickname &&
          chatRooms.map(room => {
            //내가 구매자인경우 상대는 판매자
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
