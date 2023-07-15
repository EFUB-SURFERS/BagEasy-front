import styled from "styled-components";

import { useState, useRef, useEffect, useCallback } from "react";

import Modal from "../UpdateUni/Modal";
import searchBtn from "../../assets/searchBtn.png";
import choiceuni from "../../assets/choiceuni.png";
import emptyimage from "../../assets/emptyimage.png";
import place from "../../assets/place.png";
import redspot from "../../assets/redspot.png";

const SalesContent = () => {
  const [uni, setUni] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const inputRef = useRef(null);

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  return (
    <Wrapper>
      <Line />
      <Images>
        {/* <Check src={redspot} alt="미완료" /> */}
        <AddBtn for="file" onClick={onUploadImageButtonClick}>
          <p>+</p>
        </AddBtn>
        <input
          type="file"
          name="file"
          accept="image/*"
          ref={imgRef}
          id="file"
          onChange={saveImgFile}
          // style={{ display: "none" }}
          multiple
        />
        <img src={imgFile ? imgFile : emptyimage} />
      </Images>
      <SubLine />
      <Unisection>
        <Check src={redspot} alt="미완료" />
        <Title>학교</Title>
        <input
          placeholder="학교를 선택해주세요"
          value={uni}
          onChange={e => {
            setUni(e.target.value);
          }}
        />
        <ChoiceBtn onClick={toggleModal}>
          <img src={choiceuni} alt="검색" />
        </ChoiceBtn>
      </Unisection>
      <SubLine />
      <Titlesection>
        <Check src={redspot} alt="미완료" />
        <Title>제목</Title>
        <input
          placeholder="어떤 물품을 양도 중이신가요?"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </Titlesection>
      <SubLine />
      <PriceSection>
        <Check src={redspot} alt="미완료" />
        <Title>가격</Title>
        <input
          placeholder="어느 정도의 가격에 판매하실 예정인가요?"
          value={price}
          onChange={e => {
            setPrice(e.target.value);
          }}
        />
      </PriceSection>
      <SubLine />
      <ContentSection>
        <Check src={redspot} alt="미완료" />
        <Title>내용</Title>
        <textarea
          placeholder="구매에 도움이 될 만한 물품의 세부 사항(특징)을 알려주세요. 
          ex) 구매일시, 사용 기간, 생활 오염 정도 등"
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
      </ContentSection>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uni={uni}
          setUni={setUni}
        />
      )}
    </Wrapper>
  );
};
export default SalesContent;

// label태그

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background: #808080;
`;

const SubLine = styled.div`
  width: 100%;
  height: 0.5px;
  background: #d3d3d3;
`;

const AddBtn = styled.label`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border: 6px solid #ffc700;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #cecece;
  margin-left: 34px;
  margin-top: 24px;

  p {
    display: flex;
    width: 50px;
    height: 49px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #828282;
    text-align: center;
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto;
    padding-top: 8px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 123px;
  background: #ffffff;

  margin-bottom: 19px;

  img {
    width: 80px;
    height: 80px;
    margin-left: 17px;
    margin-top: 30px;
  }

  #file {
    display: none;
  }
`;

const VirtualImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #efefef;
  margin-left: 17px;
  margin-top: 30px;
`;

const Search = styled.div`
  margin-left: 8.74px;
  img {
    width: 62px;
    height: 31px;
  }
`;

const Unisection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 24px;
  margin-top: 18px;
  margin-bottom: 19px;

  input {
    border: 0;
    display: flex;
    width: 175px;
    flex-direction: column;
    flex-shrink: 0;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 10px;
  }
`;

const Titlesection = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;

  input {
    border: 0;
    display: flex;
    width: 180px;
    flex-direction: column;
    flex-shrink: 0;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;

  input {
    border: 0;
    display: flex;
    width: 250px;
    flex-direction: column;
    flex-shrink: 0;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
  margin-bottom: 19px;

  textarea {
    border: 0;
    display: flex;
    height: 157px;
    flex-direction: column;
    flex-shrink: 0;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 18px 23px 0px 30px;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 29px;
  padding-right: 17px;
`;

const ChoiceBtn = styled.div`
  margin: auto;
  img {
    width: 85.359px;
    height: 31px;
  }
`;

const Input = styled.div`
  display: flex;
  width: 211px;
  height: 15px;
  flex-direction: column;
  flex-shrink: 0;
  color: #b8b8b8;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const OutsideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const Check = styled.img`
  width: 5px;
  height: 5px;
  margin: 0px -25px 0px 20px;
`;
