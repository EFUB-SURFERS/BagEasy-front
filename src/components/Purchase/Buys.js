import React from "react";
import {
  ListItemContainer,
  ListImage,
  TitleContainer,
  Title,
  TrashImage,
  Words,
  Subtitle,
  Check,
  CheckButton,
  Price,
} from "./SharedStyles";
import trash from "../../assets/trash.png";

const Buys = ({ image, title, subtitle, price }) => {
  return (
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
  );
};

export default Buys;
