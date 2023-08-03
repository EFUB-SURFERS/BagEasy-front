import React, { useEffect, useState } from "react";
import getSellList from "../../api/sell.js";
import Item from "./Sold";

const SoldItemList = ({ setIsModalVisible }) => {
  const [sellList, setSellList] = useState([]);

  useEffect(() => {
    getSellListData();
  }, []);

  const getSellListData = async () => {
    try {
      const res = await getSellList();
      setSellList(res);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  return (
    <div>
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
