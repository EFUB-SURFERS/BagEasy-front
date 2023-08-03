// 판매내역
import client from "./client";

const getSellList = async () => {
  try {
    const res = await client.get(`members/posts`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
export default getSellList;
