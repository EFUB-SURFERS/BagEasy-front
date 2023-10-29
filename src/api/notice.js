import client from "./client";

//알림 목록 조회 api
export const getNotices = async () => {
  try {
    const res = await client.get(`members/notices`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
