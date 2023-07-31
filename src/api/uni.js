import axios from "axios";
export const GetUniList = async uni => {
  try {
    const res = await axios.get(`https://hipo.bageasy.net/search?name=${uni}`);

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
