import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Comment from "../ItemList/Comment";
import CommentList from "../ItemList/CommentList";
import ItemContent from "./ItemContent";
import Footer from "./Footer";

const ItemInfo = () => {
  

  return (
    <Div>
      <ItemContent />
      <CommentList />
      <Comment />
      <Footer />
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 68px;
`;
