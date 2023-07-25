import React from "react";
import {
  ListItemContainer,
  ListImage,
  TitleContainer,
  Title,
  TrashImage,
  Words,
  Subtitle,
  Price,
} from "./SharedStyles";
import trash from "../../assets/trash.png";
import getBuyList from "../../api/buy.js";
import { useEffect, useState } from "react";

const BuyItem = ({ image, title, subtitle, price }) => {
  const [buyList, setBuyList] = useState([]);
  useEffect(() => {
    getList();
    console.log(buyList);
  }, []);
  const getList = async () => {
    try {
      const getbuyList = await getBuyList();
      setBuyList(getbuyList);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <>
      <ListItemContainer>
        <ListImage src={image} alt="item" />
        <Words>
          <TitleContainer>
            <Title>{title}</Title>
            <TrashImage src={trash} alt="trash" />
          </TitleContainer>
          <Subtitle>{subtitle}</Subtitle>
          <Price>{price}</Price>
        </Words>
      </ListItemContainer>
    </>
  );
};

export default BuyItem;
