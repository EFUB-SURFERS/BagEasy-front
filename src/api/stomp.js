import * as StompJs from "@stomp/stompjs";

let token = localStorage.getItem("bagtoken");

const onMessage = ({ message }) => {
  //서버에서 메세지 받으면 실행하는 함수
  if (message.body) {
    alert("got message with body " + message.body);

    const datas = JSON.parse(message.body);
    console.log("message", datas);
  } else {
    alert("got empty message");
  }
};

export const stompService = {
  client: null,

  connectClient: () => {
    stompService.client = new StompJs.Client({
      brokerURL: "ws://엔드포인트",
      connectHeaders: {
        Authorization: `${token}`,
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        stompService.client.subscribe("/주소", onMessage);
      },
      onStompError: frame => {
        console.log("Broker reported error: " + frame.headers["message"]);
        console.log("Additional details: " + frame.body);
      },
    });

    stompService.client.activate();
  },

  disconnectClient: () => {
    console.log("접속 끊음");
    stompService.client.deactivate();
    //stompService.client.unsubscribe();
  },
  publishMessage: message => {
    if (!stompService.client.connected) {
      return;
    }
    //이미지인지 텍스트인지에 따른 전송형태 확인해야함
    //수정예정
    stompService.client.publish({
      destination: "/주소",
      body: JSON.stringify(message),
    });
  },
};
