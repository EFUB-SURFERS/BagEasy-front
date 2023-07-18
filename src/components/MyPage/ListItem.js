import React from "react";
import styled from "styled-components";

const ListItem = ({ icon, text }) => (
  <ListItemContainer>
    <Icon src={icon} alt={text} />
    <ListItemText>{text}</ListItemText>
  </ListItemContainer>
);

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
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