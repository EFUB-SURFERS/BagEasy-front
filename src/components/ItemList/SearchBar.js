import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import Modal from "./../UpdateUni/Modal";
import location from "../../assets/itemListPage/location.png";
import { getMyProfile } from "../../api/member";

const SearchBar = ({
  onToggle,
  onSales,
  uniDisplay,
  setUniDisplay,
  setRefresh,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  const [update, setUpdate] = useState(false);

  //유저의 학교명 가져오기
  useEffect(() => {
    async function fetchData() {
      const data = getMyProfile();
      !uniDisplay && setUniDisplay(data.school);
    }
    fetchData();
  }, []);

  //학교명 업데이트
  useEffect(() => {
    if (!isOpen && update) {
      setUniDisplay(uni);
      localStorage.setItem("university", uni);
      setRefresh(prev => prev + 1);
    }
  }, [isOpen]);

  return (
    <Container>
      <Toggle onToggle={onToggle} onSales={onSales} />
      <TextWrapper>
        <LocationIcon>
          <Icon src={location} />
        </LocationIcon>
        <Text>{uniDisplay ? uniDisplay : "학교를 선택하세요."}</Text>
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
  margin-top: 70px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 41px;
  background: #ffc700;
  padding: 0 10px;
  &:hover {
    cursor: default;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  box-sizing: border-box;
  padding-left: 7px;
  padding-right: 40px;
  @media (min-width: 450px) {
    margin-left: auto;
    padding-right: 15px;
  }
`;

const LocationIcon = styled.div`
  width: 15px;
  height: 15px;
  padding-bottom: 6px;
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
  &:hover {
    cursor: pointer;
  }
`;

export default SearchBar;
