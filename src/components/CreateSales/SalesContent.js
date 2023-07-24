import styled from "styled-components";
import client from "../../api/client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts";

import Modal from "../UpdateUni/Modal";
import choiceuni from "../../assets/choiceuni.png";
import emptyimage from "../../assets/emptyimage.png";
import redspot from "../../assets/redspot.png";
import greenspot from "../../assets/greenspot.png";

const SalesContent = () => {
  const navigate = useNavigate();
  const [uni, setUni] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [imgFile, setImgFile] = useState([]);
  const [imgData, setImgData] = useState([]);
  const imgRef = useRef();

  const saveImgFile = e => {
    const fileArr = imgRef.current.files;
    const fileURLList = Array.from(fileArr).map(file =>
      URL.createObjectURL(file),
    );
    const limitedFileURLList = fileURLList.slice(0, 10); //개수 최대 10개로 제한
    setImgFile(limitedFileURLList);
    setImgData(fileArr);
  };

  const handleRegisterButtonClick = async () => {
    if (imgFile && uni && title && price && content) //모든 내용이 있을 때만 등록 시도
      try {
        let data = {
          postTitle: title,
          postContent: content,
          price: price,
          school: uni,
        };
        const formData = new FormData();
        for (let i = 0; i < imgData.length; i++) {
          formData.append("image", imgData[i]);
        }
        formData.append(
          "dto",
          new Blob([JSON.stringify(data)], { type: "application/json" }),
        );
        await createPost(formData);
        alert("게시글이 등록되었습니다.");
        navigate(`/deal`);
      } catch (err) {
        console.log("error", err);
      }
    else {
      alert("내용을 모두 채워주세요.");
    }
  };

  return (
    <>
      <Wrapper1>
        <Delete
          onClick={() => {
            navigate(-1);
          }}
        >
          X
        </Delete>
        <Done onClick={handleRegisterButtonClick}>완료</Done>
      </Wrapper1>
      <Wrapper>
        <Line />
        <Images>
          {imgFile.length > 0 ? (
            <Check className="check" src={greenspot} />
          ) : (
            <Check className="check" src={redspot} />
          )}
          <AddBtn for="file">
            <p>+</p>
          </AddBtn>
          <input
            type="file"
            name="file"
            accept="image/*"
            ref={imgRef}
            id="file"
            onChange={saveImgFile}
            multiple
          />
          {imgFile.length > 0 ? (
            imgFile.map((fileURL, index) => <img key={index} src={fileURL} />)
          ) : (
            <img src={emptyimage} />
          )}
        </Images>
        <SubLine />
        <Unisection>
          {/* <Check src = {uni} ? {redspot} : {greenspot} alt="미완료" />
           */}
          {uni.length > 0 ? <Check src={greenspot} /> : <Check src={redspot} />}
          <Title>학교</Title>
          <p>{uni.length > 0 && !isOpen ? uni : "학교를 선택해주세요"}</p>
          <ChoiceBtn onClick={toggleModal}>
            <img src={choiceuni} alt="검색" />
          </ChoiceBtn>
        </Unisection>
        <SubLine />
        <Titlesection>
          {title.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
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
          {price.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
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
          {content.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
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
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={uni}
            setUni={setUni}
          />
        ) : null}
      </Wrapper>
    </>
  );
};
export default SalesContent;
const Wrapper1 = styled.div`
  height: 117px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

const Delete = styled.div`
  display: flex;
  width: 36px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 11px;
  padding-top: 76px;
  padding-bottom: 18px;
`;

const Done = styled.button`
  border: 0;
  outline: 0;
  background: none;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-right: 15px;
  margin-top: 76px;
  margin-bottom: 19px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
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

  .check {
    width: 5px;
    height: 5px;
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
    outline: none;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #b8b8b8;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    outline: none;
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
    outline: none;
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
    outline: none;
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
  margin-right: 20px;
  img {
    width: 85.359px;
    height: 31px;
  }
`;

const Check = styled.img`
  width: 5px;
  height: 5px;
  margin: 0px -25px 0px 20px;
`;
