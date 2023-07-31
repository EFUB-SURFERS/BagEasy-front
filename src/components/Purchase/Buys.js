import React from "react";
import {
  ListItemContainer,
  ListImage,
  TitleContainer,
  Title,
  Words,
  Subtitle,
  Price,
} from "./SharedStyles";

const Buys = ({ image, title, subtitle, price }) => {
  return (
    <ListItemContainer>
      <ListImage src={image} alt="item" />
      <Words>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Price>{price}원</Price>
      </Words>
    </ListItemContainer>
  );
};

export default Buys;
