import React from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import Header from "./../components/Common/Header";

const FavoritesPage = () => {
  return (
    <Wrapper>
      <Header />
      <List />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FavoritesPage;
