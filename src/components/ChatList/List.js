import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
const List = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    setChatRooms([
      {
        roomId: 1,
        createMember: 3,
        joinMember: 4,
        postId: 12,
        createdAt: "2023-05-05T20:50:13.4478404",
        latestMessage: {
          context: "안녕하세요 오랜만이네요:)",
          sentAt: "2023-05-20T20:50:13.4478404",
        },
      },
      {
        roomId: 2,
        createMember: 5,
        joinMember: 4,
        postId: 12,
        createdAt: "2023-05-07T20:50:13.4478404",
        latestMessage: {
          context: "안녕하세요 오랜만이네요:)",
          sentAt: "2023-07-14T20:50:13.4478404",
        },
      },
    ]);
  }, []);
  /*
  //데이터 예시
[
  {
    "roomId": 1,
    "createMember": 3,
    "joinMember": 4,
    "postId": 12,
    "createdAt": "2023-05-05T20:50:13.4478404",
    "latestMessage": {
      "context": "안녕하세요 오랜만이네요:)",
      "sentAt": "2023-05-20T20:50:13.4478404"
    }
  },
  {
    "roomId": 2,
    "createMember": 5,
    "joinMember": 4,
    "postId": 12,
    "createdAt": "2023-05-07T20:50:13.4478404",
    "latestMessage": {
      "context": "안녕하세요 오랜만이네요:)",
      "sentAt": "2023-05-11T20:50:13.4478404"
    }
  }
] */
  return (
    <>
      <ChatList>
        {chatRooms &&
          chatRooms.map(room => {
            return (
              <Item
                key={room.createdAt}
                createMember={room.createMember}
                joinMember={room.joinMember}
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
