import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
import { getChatRooms } from "../../api/chat";
import TokenRefreshModal from "../Common/TokenRefreshModal";
const List = () => {
  const [chatRooms, setChatRooms] = useState([]);
  let yourNickname = "";
  const myNickname = localStorage.getItem("myNickname");
  const [isModalVisible, setIsModalVisible] = useState("false");
  useEffect(() => {
    try {
      getChatRoomsData();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
  }, []);

  const getChatRoomsData = async () => {
    const res = await getChatRooms();
    setChatRooms(res);
  };

  return (
    <>
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
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
