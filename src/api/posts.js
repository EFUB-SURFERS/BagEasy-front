import axios from "axios";
//판매글 관련 api 요청 함수 여기에 구현해주세요

//판매글 구매 확정 api
//client.js에 default axios instance 구현시 수정
export const FinishDeal = async (postId, buyerId) => {
  try {
    const res = await axios.put(
      `http://localhost:8080/posts/${postId}/isSold`,
      {
        buyerId: { buyerId },
      },
    );

    console(res);
  } catch (err) {
    console.log("에러 발생", err);
  }
};
