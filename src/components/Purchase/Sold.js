import React from "react";
import {
  ListItemContainer,
  ListImage,
  TitleContainer,
  Title,
  Words,
  Subtitle,
  Check,
  CheckButton,
  Price,
} from "./SharedStyles";
import { useNavigate } from "react-router-dom";

const Item = ({ image, title, subtitle, price, completed, postId }) => {
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
        <Check>
          <CheckButton $completed={completed}>
            {completed ? "성사완료" : "성사미완료"}
          </CheckButton>
          <Price>{price}원</Price>
        </Check>
      </Words>
    </ListItemContainer>
  );
};

export default Item;
