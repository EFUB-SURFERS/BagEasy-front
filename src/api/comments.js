import client from "./client";

export const getComments = async postId => {
  try {
    const res = await client.get(`posts/${postId}/comments`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
