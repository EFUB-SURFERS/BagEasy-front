import client from "./client";

//게시글 찜하기 api
export const addLikes = async postId => {
  try {
    await client.post(`posts/${postId}/likes`);
    console.log("찜하기");
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//게시글 찜하기 해제 api
export const cancelLikes = async postId => {
  try {
    const res = await client.delete(`posts/${postId}/likes`);
    console.log("찜취소");
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//게시글 찜여부 조회 api
export const checkLikes = async postId => {
  try {
    const res = await client.get(`posts/${postId}/likes`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
