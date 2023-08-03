import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
import { getChatRooms } from "../../api/chat";
import TokenRefreshModal from "../Common/TokenRefreshModal";
import { getMyProfile } from "../../api/member";
const List = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [myNickname, setMyNickname] = useState("");
  let yourNickname = "";

  const [isModalVisible, setIsModalVisible] = useState("false");

  const getMynickname = async () => {
    try {
      const data = await getMyProfile();
      setMyNickname(data.nickname);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
  };
  useEffect(() => {
    getChatRoomsData();
    getMynickname();
  }, []);

  const getChatRoomsData = async () => {
    try {
      const res = await getChatRooms();

      setChatRooms(res);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
  };

  return (
    <>
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
      <ChatList>
        {chatRooms ? (
          <>
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
          </>
        ) : (
          <div className="empty">
            대화 기록이 없습니다. <br /> 채팅을 보내 대화를 시작하세요.
          </div>
        )}
      </ChatList>
    </>
  );
};

export default List;
const ChatList = styled.div`
  padding-top: 112px;
  .empty {
    margin-top: 50px;
    font-family: Arial;
    font-style: regular;
    font-size: 1rem;
    color: #848484;

    text-align: center;
  }
`;
