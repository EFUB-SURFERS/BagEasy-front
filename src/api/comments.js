import client from "./client";

//댓글 작성 api
export const createComment = async (postId, body) => {
  try {
    const res = await client.post(`posts/${postId}/comments`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};

//댓글 조회 api
export const getComments = async postId => {
  try {
    const res = await client.get(`posts/${postId}/comments`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};

//댓글 삭제 api
export const deleteComment = async commentId => {
  try {
    const res = await client.delete(`comments/${commentId}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};
