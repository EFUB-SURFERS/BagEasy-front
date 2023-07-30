import client from "./client";

//채팅방 리스트 조회 api
export const getChatRooms = async () => {
  try {
    const res = await client.get(`chatrooms`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//채팅 리스트 조회 api (채팅 내역)
export const getMessages = async roomId => {
  try {
    const res = await client.get(`chatrooms/${roomId}`);

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//채팅방 생성 api
export const createRoom = async (postId, myNickname) => {
  try {
    console.log(myNickname);
    const res = await client.post(`chatrooms`, {
      postId: postId,
      createMember: myNickname,
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//채팅방 접속 끊기 api
export const disconnectChat = async roomId => {
  try {
    const res = await client.post(`chatrooms/${roomId}`);

    console.log(res.data);
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//채팅방 개별 정보 조회 api
export const getChatRoom = async roomId => {
  try {
    const res = await client.get(`chatrooms/info/${roomId}`);

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//서버에서 받은 newMessage 디비 저장용 post 요청
export const saveMessage = async newMessage => {
  try {
    const res = await client.post(`chatrooms/callback`, newMessage);

    console.log(res);
  } catch (err) {
    console.log("에러 발생", err);
  }
};
