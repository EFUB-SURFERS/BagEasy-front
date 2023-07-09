import React from "react";
import { styled } from "styled-components";
import Header from "../components/UpdateUni/Header";
import SearchBar from "../components/UpdateUni/SearchBar";
const UpdateUniPage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <SearchBar />
      </Wrapper>
    </div>
  );
};

export default UpdateUniPage;

const Wrapper = styled.div`
  padding-top: 97px;
`;
