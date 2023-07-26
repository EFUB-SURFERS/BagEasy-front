import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Item from "./Item";
import { getChatRooms } from "../../api/chat";
import { getMyProfile } from "../../api/member";
const List = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const resolvePromiseRooms = async () => await getChatRooms();
  const resolvePromiseProfile = async () => await getMyProfile();
  const [myNickname, setMyNickname] = useState("");
  const [yourNickname, setYourNickname] = useState("");

  useEffect(() => {
    let res, myProfile;
    //프로미스 해결
    (async () => {
      res = await resolvePromiseRooms();
      console.log(res);
      setChatRooms(res);
    })();

    (async () => {
      myProfile = await resolvePromiseProfile();
      setMyNickname(myProfile.nickname);
    })();
  }, []);

  return (
    <>
      <ChatList>
        {chatRooms &&
          chatRooms.map(room => {
            myNickname === room.createMember
              ? setYourNickname(room.joinMember)
              : setYourNickname(room.createMember);
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
