// 판매내역
import client from "./client";

const getSellList = async () => {
  try {
    const res = await client.get(`mmembers/posts/sales`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
export default getSellList;
