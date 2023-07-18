import client from "./client";

//게시글 찜하기 api
export const addLikes = async () => {
  try {
    const res = await client.get(`post/{postId}/likes`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
