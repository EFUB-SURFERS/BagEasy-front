import React, { useEffect, useState } from "react";
import searchImg from "../../assets/itemListPage/searchImg.png";
import styled from "styled-components";
import Toggle from "./Toggle";
import Modal from "./../UpdateUni/Modal";
import location from "../../assets/itemListPage/location.png";

const SearchBar = ({ onToggle, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  const [uniDisplay, setUniDisplay] = useState();
  useEffect(() => {
    if (!isOpen) setUniDisplay(uni);
  }, [isOpen]);
  return (
    <Container>
      <Toggle onToggle={onToggle} filter={filter} />
      <TextWrapper>
        <LocationIcon>
          <Icon src={location} />
        </LocationIcon>
        <Text>{uni ? uni : "University of Northern Colorado"}</Text>
      </TextWrapper>
      <ChangeBtn onClick={() => setIsOpen(true)}>변경</ChangeBtn>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uni={uni}
          setUni={setUni}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 97px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 41px;
  background: #ffc700;
  padding: 0 10px;
`;

const LocationIcon = styled.div`
  width: 15px;
  height: 15px;
  padding-bottom: 4px;
`;

const Icon = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-left: 10px;
  padding-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChangeBtn = styled.div`
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export default SearchBar;
