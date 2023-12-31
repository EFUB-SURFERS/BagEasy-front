import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { saveMessage } from "./chat";

let token = localStorage.getItem("bagtoken");

let stompClient;

//서버에서 메세지 받으면 실행하는 함수
const onMessage = (data, onNewMessage) => {
  if (data.body) {
    const newMessage = JSON.parse(data.body);

    const myNickname = localStorage.getItem("myNicknameForChat");

    //db 조회 없이 화면에 보여줄 수 있도록 실시간 메세지 추가.
    if (newMessage.contentType === "talk") {
      //받은 메세지가 talk 타입이면 post 요청 주체(본인)닉네임 추가해서 post 요청
      newMessage.callbackNickname = myNickname;
      saveMessage(newMessage);
      //mine 프로퍼티 추가해서 리덕스 저장
      newMessage.mine = true;
      if (newMessage.nickname !== myNickname) newMessage.mine = false;

      onNewMessage(newMessage);
    } else {
      //notice 메세지 처리
      //alert("got empty message");
    }
  }
};

export const connectClient = (roomId, onNewMessage) => {
  stompClient = Stomp.over(() => {
    const sock = new SockJS("https://server.bageasy.net/chat");
    return sock;
  });

  stompClient.connect(
    {
      Authorization: `${token}`,
      roomId: roomId,
    },
    () => {
      console.log("연결 완료");
      stompClient.subscribe(
        `/topic/group/${roomId}`,
        data => onMessage(data, onNewMessage),
        {
          Authorization: `${token}`,
        },
      );
    },
  );
};

export const disconnectClient = () => {
  console.log("접속 끊음");
  stompClient.deactivate();
  //stompClient.unsubscribe();
  //unsubscibe는 연결전에 방을 나가면 오류나서 제외.
};

export const publishMessage = (roomId, isImage, message) => {
  if (!stompClient.connected) {
    return;
  }

  stompClient.send(
    "/app/message",
    {
      Authorization: `${token}`,
    },
    JSON.stringify({
      roomId: roomId,
      contentType: "talk",
      type: isImage,
      content: message,
    }),
  );
};
