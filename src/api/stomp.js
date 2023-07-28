import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { saveMessage } from "./chat";

let token = localStorage.getItem("bagtoken");

let stompClient;

//서버에서 메세지 받으면 실행하는 함수
const onMessage = (data, onNewMessage) => {
  if (data.body) {
    const newMessage = JSON.parse(data.body);

    const myNickname = localStorage.getItem("myNickname");

    //db 조회 없이 화면에 보여줄 수 있도록 실시간 메세지 추가.
    if (
      newMessage.contentType === "talk" &&
      newMessage.nickname !== myNickname
    ) {
      //받은 메세지가 상대가 보낸 메세지이고 talk 타입이면 post 요청
      console.log("상대의 메세지에요");
      saveMessage(newMessage);
    }

    //mine 프로퍼티 추가해서 리덕스 저장
    if (newMessage.contentType === "talk") {
      newMessage.mine = true;
      if (newMessage.nickname !== myNickname) newMessage.mine = false;

      onNewMessage(newMessage);
    }
  } else {
    alert("got empty message");
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
