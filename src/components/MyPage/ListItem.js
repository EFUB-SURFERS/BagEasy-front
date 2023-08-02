import React from "react";
import styled from "styled-components";

const ListItem = ({ icon, text, onClick }) => (
  <ListItemContainer onClick={onClick}>
    <Icon src={icon} alt={text} />
    <ListItemText>{text}</ListItemText>
  </ListItemContainer>
);

const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #ffee94;
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  padding: 18px;
`;

const ListItemText = styled.p`
  margin: 0;
  font-size: 16px;
`;
export default ListItem;
