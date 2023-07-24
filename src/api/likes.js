import client from "./client";

//양도글 찜하기 api
export const addLike = async postId => {
  try {
    const res = await client.post(`posts/${postId}/likes`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//양도글 찜 해제하기
export const deleteLike = async postId => {
  try {
    const res = await client.delete(`posts/${postId}/likes`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//찜 여부 조회
export const checkLike = async postId => {
  try {
    const res = await client.get(`posts/${postId}/likes`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//찜한 양도글 조회 api
export const getLikes = async () => {
  try {
    const res = await client.get(`posts/likes`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
