import client from "./client";

//채팅방 리스트 조회 api
export const getChatRomms = async () => {
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

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//채팅방 생성 api
export const createRoom = async (postId, createMember) => {
  try {
    const res = await client.post(`chatrooms`, {
      postId: postId,
      createMember: createMember,
    });

    console.log(res.data);
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
