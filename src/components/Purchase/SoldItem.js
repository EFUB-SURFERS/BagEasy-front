import React, { useEffect, useState } from "react";
import getSellList from "../../api/sell.js";
import TokenRefreshModal from "../Common/TokenRefreshModal";
import Item from "./Sold";

const SoldItemList = () => {
  const [sellList, setSellList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState("false");

  useEffect(() => {
    try {
      getSellListData();
    } catch (err) {
      if (err.response && err.response.status === 400) {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
  }, []);

  const getSellListData = async () => {
    try {
      const res = await getSellList();
      setSellList(res);
    } catch (err) {
      console.log("error", err.res);
    }
  };

  return (
    <div>
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
      {sellList &&
        sellList.map(item => (
          <Item
            key={item.postId}
            image={item.imageResponseDtos[0].imageUrl}
            title={item.postTitle}
            subtitle={item.school}
            price={item.price}
            completed={item.isSold}
            postId={item.postId}
          />
        ))}
    </div>
  );
};
export default SoldItemList;
