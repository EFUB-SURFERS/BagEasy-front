import styled from "styled-components";

import { useState, useRef, useEffect } from "react";

import Modal from "../UpdateUni/Modal";
import searchBtn from "../../assets/searchBtn.png";
import place from "../../assets/place.png";

const SalesContent = () => {
  const modalRef = useRef();
  const wrapperRef = useRef();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = event => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  console.log("다른영역클릭");

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Line />
      <Images>
        <AddBtn>
          <p>+</p>
        </AddBtn>
        <VirtualImage />
      </Images>
      <SubLine />
      <Univ>
        <UnivInput>
          <img src={place} alt="검색" />
          {uni ? uni : "학교명을 입력하세요"}
        </UnivInput>
        <Search onClick={toggleModal}>
          <img src={searchBtn} alt="검색" />
        </Search>
      </Univ>
      {isOpen && (
        <>
          <OutsideWrapper onClick={toggleModal} />
          <Modal
            ref={modalRef}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={uni}
            setUni={setUni}
          />
        </>
      )}
      <SubLine />
      <Titlesection>
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
    </Wrapper>
  );
};
export default SalesContent;

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

const AddBtn = styled.div`
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
`;

const VirtualImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #efefef;
  margin-left: 17px;
  margin-top: 30px;
`;

const Univ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const UnivInput = styled.div`
  width: 273px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #efefef;
  color: #656565;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  img {
    padding-left: 11px;
    padding-right: 8px;
    padding-top: 7px;
    width: 18px;
    height: 18px;
  }
`;

const Search = styled.div`
  margin-left: 8.74px;
  img {
    width: 62px;
    height: 31px;
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
    width: 211px;
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
// const PriceSection = styled.div`
//   display: flex;
//   flex-direction: row;

//   margin-top: 18px;
//   margin-bottom: 19px;
// `;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
  margin-bottom: 19px;

  textarea {
    border: 0;
    display: flex;
    width: 337px;
    height: 97px;
    flex-direction: column;
    flex-shrink: 0;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-left: 29px;
    margin-top: 18px;
    margin-right: 23px;
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

const Price = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const OutsideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;
