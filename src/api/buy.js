// 구매내역
import client from "./client";

 const getBuyList = async () => {
  try {
    const res = await client.get(`members/posts/purchases`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

export default getBuyList;

