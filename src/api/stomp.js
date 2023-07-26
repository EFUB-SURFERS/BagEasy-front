import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { saveMessage } from "./chat";
import {
  addNewMessage,
  checkIsNewDate,
  getSendTime,
} from "../components/ChatRoom/MessagesContainer";

let token = localStorage.getItem("bagtoken");

let stompClient;

//실시간으로 받은 메세지화면에 보여주기
const renderMessage = newMessage => {
  const DATE = new Date(
    newMessage.sentAt - new Date().getTimezoneOffset() * 60 * 1000,
  );
  console.log(DATE);

  const message = {
    mine: false,
    id: newMessage.sentAt,
    senderName: newMessage.nickname,
    contentType: newMessage.contentType,
    content: newMessage.content,
    sendTime: getSendTime(DATE.toString()),
    sendDate: {
      isNewDate: checkIsNewDate(DATE.toString()),
      date: DATE.toString.substr(0, 10),
    },
  };

  addNewMessage(message);
};

//서버에서 메세지 받으면 실행하는 함수
const onMessage = data => {
  alert(data.body);
  if (data.body) {
    console.log("data", data.body);
    const newMessage = JSON.parse(data.body);
    console.log("new-message", newMessage);

    //talk 타입이면 post 요청
    if (newMessage.contentType === "talk") {
      saveMessage(newMessage);
    }

    //db 조회 없이 화면에 보여줄 수 있는 message 배열에 메세지 추가.
    renderMessage(newMessage);
  } else {
    alert("got empty message");
  }
};

export const connectClient = roomId => {
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
      stompClient.subscribe(`/topic/group/${roomId}`, onMessage, {
        Authorization: `${token}`,
      });
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
    "/app/chat",
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
