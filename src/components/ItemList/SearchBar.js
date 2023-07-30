import React, { useEffect, useState } from "react";
import searchImg from "../../assets/itemListPage/searchImg.png";
import styled from "styled-components";
import Toggle from "./Toggle";
import Modal from "./../UpdateUni/Modal";
import location from "../../assets/itemListPage/location.png";
import { getMyProfile } from "../../api/member";

const SearchBar = ({ onToggle, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultUni, setDefaultUni] = useState("");
  const [uni, setUni] = useState("");
  const [update, setUpdate] = useState(false);
  const [uniDisplay, setUniDisplay] = useState("");

  //유저의 학교명 가져오기
  useEffect(() => {
    async function fetchData() {
      const data = getMyProfile();
      setDefaultUni(data.school);
    }
    fetchData();
  }, []);

  //학교명 업데이트
  useEffect(() => {
    !isOpen && update && setUniDisplay(uni);
  }, [isOpen]);

  return (
    <Container>
      <Toggle onToggle={onToggle} filter={filter} />
      <TextWrapper>
        <LocationIcon>
          <Icon src={location} />
        </LocationIcon>
        <Text>
          {uniDisplay
            ? uniDisplay
            : defaultUni
            ? defaultUni
            : "학교를 선택하세요."}
        </Text>
      </TextWrapper>
      <ChangeBtn onClick={() => setIsOpen(true)}>변경</ChangeBtn>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uni={uni}
          setUni={setUni}
          setUpdate={setUpdate}
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

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  padding-left: 7px;
  padding-right: 50px;
  box-sizing: border-box;
`;

const LocationIcon = styled.div`
  width: 15px;
  height: 15px;
  padding-bottom: 4px;
`;

const Icon = styled.img`
  width: 15px;
`;

const Text = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-left: 10px;
  padding-bottom: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ChangeBtn = styled.div`
  width: 26px;
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
`;

export default SearchBar;
