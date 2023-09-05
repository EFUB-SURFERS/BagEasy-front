import React from "react";
import getBuyList from "../../api/buy.js";
import { useEffect, useState } from "react";
import Buys from "./Buys.js";

const BuyItem = ({ setIsModalVisible }) => {
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    getBuyListData();
  }, []);

  const getBuyListData = async () => {
    try {
      const getbuyList = await getBuyList();
      setBuyList(getbuyList);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  return (
    <>
      {buyList &&
        buyList.map(item => (
          <Buys
            key={item.postId}
            image={item.imageResponseDtos[0].imageUrl}
            title={item.postTitle}
            subtitle={item.school}
            price={item.price}
            postId={item.postId}
          />
        ))}
    </>
  );
};

export default BuyItem;
