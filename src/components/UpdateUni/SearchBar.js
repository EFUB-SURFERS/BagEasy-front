import React, { useState } from "react";
import { styled } from "styled-components";
import place from "../../assets/place.png";
import Modal from "./Modal";
//모달창 열렸을때 뒷 화면 background: rgba(0, 0, 0, 0.05); 처리 따로 해야함.
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  return (
    <Wrapper>
      <Bar>
        <img src={place} alt="" />
        <Text
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {uni ? uni : "학교명을 입력하세요"}
        </Text>
      </Bar>
      <Btn>검색</Btn>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uni={uni}
          setUni={setUni}
        />
      ) : null}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Btn = styled.div`
  width: 62px;
  height: 31px;
  border-radius: 100px;
  background: #ffc701;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 8.73px;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Bar = styled.div`
  width: 273px;
  height: 31px;
  border-radius: 100px;
  background: #efefef;
  border: none;
  display: flex;

  img {
    margin-top: 6.5px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
`;
const Text = styled.div`
  margin: 8px 8px;
  color: #656565;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
