import React from "react";
import searchImg from "../../assets/searchImg.png";
import styled from "styled-components";
import Toggle from "./Toggle";

const SearchBar = ({ onToggle, filter }) => {
  return (
    <SearchWrapper>
      <Toggle onToggle={onToggle} filter={filter} />
      <SearchInput />
      <SearchBtn>
        <SearchImg src={searchImg} />
      </SearchBtn>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  height: 43px;
  margin-top: 97px;
  position: fixed;
  width: 100%;
  background: white;
`;

const SearchInput = styled.input`
  flex: 7;
  height: 2rem;
  display: block;
  width: 7rem;
  border: none;
  border-radius: 2rem;
  background: #eeeeee;
  padding-left: 1rem;
  padding-right: 2.5rem;
  margin: 0rem 0.5rem;
  box-sizing: border-box;
  font-size: 17px;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  width: 1.7rem;
  /* border: 1px solid red; */
  /* margin: 1rem; */
  position: absolute;
  right: 1rem;
  transform: translateY(2px);
`;

const SearchImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default SearchBar;
