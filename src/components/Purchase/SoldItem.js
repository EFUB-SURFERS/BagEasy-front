import React, { useEffect, useState } from "react";
import getSellList from "../../api/sell.js";
import Item from "./Sold";

const SoldItemList = () => {
  const [sellList, setSellList] = useState([]);

  useEffect(() => {
    getSellListData();
    console.log(sellList);
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
      {sellList &&
        sellList.map(item => (
          <Item
            key={item.postId}
            image={item.imageResponseDtos[0].imageUrl}
            title={item.postTitle}
            subtitle={item.school}
            price={item.price}
            completed={item.isSold}
          />
        ))}
    </div>
  );
};
export default SoldItemList;
