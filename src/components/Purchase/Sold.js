import React from "react";
import { ListItemContainer, ListImage, TitleContainer, Title, TrashImage, Words, Subtitle, Check, CheckButton, Price } from './SharedStyles';
import trash from '../../assets/trash.png';

const Item = ({ image, title, subtitle, price, completed }) => {
  return (
        <ListItemContainer>
          <ListImage src={image} alt="item" />
          <Words>
            <TitleContainer>
              <Title>{title}</Title>
              <TrashImage src={trash} alt="trash" />
            </TitleContainer>
            <Subtitle>{subtitle}</Subtitle>
            <Check>
              <CheckButton completed={completed}>
                {completed ? '성사완료' : '성사미완료'}
              </CheckButton>
              <Price>{price}</Price>
            </Check>
          </Words>
        </ListItemContainer>
      )
  }

  export default Item;
