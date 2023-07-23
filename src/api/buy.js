import axios from "axios";

export const getBuyList = async () => {
  try {
    const res = await axios.get(
      `https://server.bageasy.net/members/posts/purchases`
    );
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    return [];
  }
};
