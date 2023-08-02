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
import { useNavigate } from "react-router-dom";

const Buys = ({ image, title, subtitle, price, postId }) => {
  const navigate = useNavigate();

  return (
    <ListItemContainer
      onClick={() => {
        navigate(`/detail/${postId}`);
      }}
    >
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
