import client from "./client";

//양도글 찜하기 api
export const addLikes = async postId => {
  try {
    await client.post(`posts/${postId}/likes`);
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//게시글 찜하기 해제 api
export const cancelLikes = async postId => {
  try {
    const res = await client.delete(`posts/${postId}/likes`);
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//게시글 찜여부 조회 api
export const getLikes = async postId => {
  try {
    const res = await client.get(`posts/${postId}/likes`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    return err;
  }
};

export const getLikedPosts = async () => {
  try {
    const res = await client.get(`posts/likes`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    return err;
  }
};
