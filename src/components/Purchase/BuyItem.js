import React from "react";
import getBuyList from "../../api/buy.js";
import TokenRefreshModal from "../Common/TokenRefreshModal";

import { useEffect, useState } from "react";
import Buys from "./Buys.js";

const BuyItem = () => {
  const [buyList, setBuyList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState("false");

  useEffect(() => {
    try {
      getBuyListData();
    } catch (err) {
      if (err.response && err.response.status === 400) {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
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
      {" "}
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
      {buyList &&
        buyList.map(item => (
          <Buys
            key={item.postId}
            image={item.imageResponseDtos[0].imageUrl}
            title={"테스트 제목 길이 테스트 제목 길이 테스트 제목 길이 테스타"}
            subtitle={item.school}
            price={item.price}
            postId={item.postId}
          />
        ))}
    </>
  );
};

export default BuyItem;
