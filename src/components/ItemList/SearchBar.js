import React, { useEffect, useState } from "react";
import searchImg from "../../assets/searchImg.png";
import styled from "styled-components";
import Toggle from "./Toggle";
import Modal from "./../UpdateUni/Modal";

const SearchBar = ({ onToggle, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  const [uniDisplay, setUniDisplay] = useState();
  useEffect(() => {
    if (!isOpen) setUniDisplay(uni);
  }, [isOpen]);
  return (
    <SearchWrapper>
      <Bar>
        <Text>{uni ? uni : "Example University"}</Text>
        {/* <SearchBtn>
          <SearchImg src={searchImg} />
        </SearchBtn> */}
        <ChangeBtn onClick={() => setIsOpen(true)}>학교 변경</ChangeBtn>
      </Bar>
      <Toggle onToggle={onToggle} filter={filter} />
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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93px;
  box-sizing: border-box;
  margin-top: 97px;
  position: fixed;
  width: 100%;
  padding: 0 15px;
  /* padding: 0 19px; */

  /* padding-bottom: 10px; */
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  /* background: #efefef; */
  /* border-radius: 20px; */
  height: 60px;
  /* border: 1px solid black; */
  background: white;
`;

const Text = styled.div`
  /* text-align: center; */
  /* font-weight: bold; */
  font-size: 16px;
  /* margin-left: 12px; */
  /* border: 1px solid red; */
  flex: auto;
`;

const SearchBtn = styled.div`
  width: 1.7rem;
  right: 1rem;
  transform: translateY(2px);
  margin-right: 10px;
  margin-left: auto;
`;

const SearchImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const ChangeBtn = styled.button`
  width: 86px;
  height: 32px;
  margin-left: 10px;
  background: #ffc700;
  border: none;
  border-radius: 20px;
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

export default SearchBar;
