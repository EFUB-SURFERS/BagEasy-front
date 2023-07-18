import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import Footer from "./../components/ItemList/Footer";

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
      <List margintop="140px" marginbottom="60px" />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ItemListPage;
