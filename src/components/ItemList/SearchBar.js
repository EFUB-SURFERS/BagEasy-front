import React, { useState } from "react";
import searchImg from "../../assets/searchImg.png";
import styled from "styled-components";
import Toggle from "./Toggle";
import Modal from "./../UpdateUni/Modal";

const SearchBar = ({ onToggle, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  return (
    <SearchWrapper>
      <Toggle onToggle={onToggle} filter={filter} />
      <University>{isOpen ? "" : uni}</University>
      <SearchBtn onClick={() => setIsOpen(true)}>
        <SearchImg src={searchImg} />
      </SearchBtn>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uni={uni}
          setUni={setUni}
        />
      ) : null}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 43px;
  margin-top: 97px;
  position: fixed;
  width: 100%;
  background: white;
`;

const University = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

const SearchBtn = styled.div`
  width: 1.7rem;
  right: 1rem;
  transform: translateY(2px);
  margin-right: 0.5rem;
`;

const SearchImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default SearchBar;
