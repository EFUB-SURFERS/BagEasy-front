// 구매내역
import client from "./client";

const getBuyList = async () => {
  try {
    const res = await client.get(`members/posts/purchases`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default getBuyList;
