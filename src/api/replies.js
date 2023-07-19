import client from "./client";

//대댓글 생성 api
export const createReply = async (postId, commentId, body) => {
  try {
    const res = await client.post(
      `posts/${postId}/comments/${commentId}/replies`,
      body,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//대댓글 조회 api
export const getReplies = async commentId => {
  try {
    const res = await client.get(`comments/${commentId}/replys`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//대댓글 삭제 api
export const deleteReply = async replyId => {
  try {
    const res = await client.delete(`repies/${replyId}`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
