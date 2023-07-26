import client from "./client";
//판매글 관련 api 요청 함수 여기에 구현해주세요

//판매글 구매 확정 api
export const FinishDeal = async (postId, buyerId) => {
  try {
    const res = await client.put(`posts/${postId}/isSold`, {
      buyerId: { buyerId },
    });

    console.log(res);
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//판매글 조회 api
export const getDetail = async postId => {
  try {
    const res = await client.get(`posts/${postId}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//판매글 전체조회 api
export const getAllPosts = async () => {
  try {
    const res = await client.get(`posts`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//판매글 삭제 api
export const deleteDetail = async postId => {
  try {
    const res = await client.delete(`posts/${postId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 판매글 작성 api
export const createPost = async formData => {
  try {
    const res = await client.post(`posts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 판매글 수정 api
export const modifyPost = async (postId,formData) => {
  try {
    const res = await client.put(`posts/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
