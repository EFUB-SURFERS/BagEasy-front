import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";

const ItemListPage = () => {
  const [filter, setFilter] = useState(true);
  const navigate = useNavigate();
  const onToggle = () => {
    setFilter(prev => !prev);
  };
  return (
    <Wrapper>
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar onToggle={onToggle} filter={filter} />
      <List margintop="190px" marginbottom="70px" />
      <WriteBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ItemListPage;
