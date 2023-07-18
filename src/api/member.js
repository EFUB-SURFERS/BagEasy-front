import client from "./client";

//멤버 조회 api
export const getProfile = async memberId => {
  try {
    const res = await client.get(`members/${memberId}`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};