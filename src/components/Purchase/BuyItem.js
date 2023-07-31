import React from "react";
import getBuyList from "../../api/buy.js";
import { useEffect, useState } from "react";
import Buys from "./Buys.js";

const BuyItem = () => {
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    getBuyListData();
    console.log(buyList);
  }, []);

  const getBuyListData = async () => {
    try {
      const getbuyList = await getBuyList();
      setBuyList(getbuyList);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      {buyList &&
        buyList.map(item => (
          <Buys
            key={item.postId}
            image={item.imageResponseDtos[0].imageUrl}
            title={"테스트 제목 길이 테스트 제목 길이 테스트 제목 길이 테스타"}
            subtitle={item.school}
            price={item.price}
          />
        ))}
    </>
  );
};

export default BuyItem;
