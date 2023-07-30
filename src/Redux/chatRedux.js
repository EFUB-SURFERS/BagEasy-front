const initialState = {};

//메세지 저장 액션함수
export const addNewMessage = newMessage => {
  return {
    type: "ADD_MESSAGE",
    newMessage,
  };
};

//리듀서
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return action.newMessage;

    default:
      return state;
  }
};
