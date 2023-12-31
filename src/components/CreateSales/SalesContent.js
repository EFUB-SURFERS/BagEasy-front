import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts";
import TokenRefreshModal from "../Common/TokenRefreshModal";

import Modal from "../UpdateUni/Modal";

import choiceuni from "../../assets/post/choiceuni.png";
import emptyimage from "../../assets/post/emptyimage.png";
import redspot from "../../assets/post/redspot.png";
import greenspot from "../../assets/post/greenspot.png";
import close from "../../assets/post/close.png";
import upload from "../../assets/post/upload.png";

const SalesContent = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    //전송할 데이터
    uni: "",
    title: "",
    price: "",
    content: "",
  });
  const [imgFile, setImgFile] = useState([]); //전송할 이미지 데이터

  const [isOpen, setIsOpen] = useState(false); //모달 상태 관리
  const imgRef = useRef();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const saveImgFile = e => {
    const fileArr = imgRef.current.files;
    const limitedFileArr = Array.from(fileArr).slice(0, 10); 
    setImgFile(prevImgFile => [...prevImgFile, ...limitedFileArr]);
    setFormData(prevData => ({ ...prevData, imgData: imgFile })); //이미지 전송 데이터
  };

  const handleRegisterButtonClick = async () => {
    const { uni, title, price, content, imgData } = formData;
    if (isNaN(price)) {
      alert("가격에는 숫자만 입력해 주세요.");
      return;
    }
    if (imgFile.length > 0 && uni && title && price && content) {
      try {
        let data = {
          postTitle: title,
          postContent: content,
          price: price,
          school: uni,
        };
        const formData = new FormData();
        for (let i = 0; i < imgFile.length; i++) {
          //순환문을 이용해서 이미지 배열 담기
          formData.append("image", imgFile[i]);
        }
        formData.append(
          "dto",
          new Blob([JSON.stringify(data)], { type: "application/json" }),
        );
        const res = await createPost(formData);
        const postId = res.postId;
        alert("게시글이 등록되었습니다.");
        navigate(`/detail/` + postId); //등록 완료 후 해당글 상세페이지로 이동
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    } else {
      alert("내용을 모두 채운 후 다시 등록해 주세요.");
    }
  };

  const handleDeleteImage = index => {
    const newImgFile = [...imgFile];
    newImgFile.splice(index, 1); // 해당 인덱스의 이미지를 삭제
    setImgFile(newImgFile);
  };

  return (
    <>
      {isModalVisible && <TokenRefreshModal />}
      <Header>
        <Delete onClick={() => navigate(-1)}>
          <Close src={close} />
        </Delete>
        <Done onClick={handleRegisterButtonClick}>완료</Done>
      </Header>
      <Wrapper>
        <Line />
        <Images>
          {imgFile.length > 0 ? (
            <Check className="check" src={greenspot} />
          ) : (
            <Check className="check" src={redspot} />
          )}
          <UploadBtn for="file">
            <img src={upload}></img>
          </UploadBtn>
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
            imgFile.map((file, index) => (
              <div key={index} className="image-container">
                <img src={URL.createObjectURL(file)} alt={`Image ${index}`} />
                <button onClick={() => handleDeleteImage(index)}>X</button>
              </div>
            ))
          ) : (
            <img src={emptyimage} />
          )}
        </Images>
        <SubLine />
        <Unisection>
          {formData.uni.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>학교</Title>
          <UniText uni={formData.uni}>
            {formData.uni.length > 0 && !isOpen
              ? formData.uni
              : "학교를 선택해주세요"}
          </UniText>
          <ChoiceBtn onClick={toggleModal}>
            <img src={choiceuni} alt="검색" />
          </ChoiceBtn>
        </Unisection>
        <SubLine />
        <Titlesection>
          {formData.title.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>제목</Title>
          <input
            placeholder="어떤 물품을 양도 중이신가요?"
            value={formData.title}
            onChange={e => {
              setFormData(prevData => ({ ...prevData, title: e.target.value }));
            }}
          />
        </Titlesection>
        <SubLine />
        <PriceSection>
          {formData.price.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>가격</Title>
          {formData.price.length > 0 ? <p>₩</p> : ""}
          <input
            type="number"
            placeholder="₩ 가격을 입력해주세요"
            value={formData.price}
            onChange={e => {
              setFormData(prevData => ({ ...prevData, price: e.target.value }));
            }}
          />
        </PriceSection>
        <SubLine />
        <ContentSection>
          {formData.content.length > 0 ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>내용</Title>
          <textarea
            placeholder="구매에 도움이 될 만한 물품의 세부 사항(특징)을 알려주세요.
          ex) 구매일시, 사용 기간, 생활 오염 정도 등"
            value={formData.content}
            onChange={e => {
              setFormData(prevData => ({
                ...prevData,
                content: e.target.value,
              }));
            }}
          />
        </ContentSection>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={formData.uni}
            setUni={uni => setFormData(prevData => ({ ...prevData, uni }))}
          />
        ) : null}
      </Wrapper>
    </>
  );
};
export default SalesContent;

const Header = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

const Delete = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  margin-left: 11px;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  padding-left: 15px;
  &:hover {
    filter: brightness(30%);
  }
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

  &:hover {
    color: #727272;
  }
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

const UploadBtn = styled.label`
  margint-left: 40px;
  img {
    padding-left: 17px;
    width: 68px;
    height: 68px;

    &:hover {
      filter: brightness(80%);
    }
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

  .image-container {
    position: relative;
  }

  button {
    position: absolute;
    background: none;
    top: 35px;
    right: 5px;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
  }

  img {
    width: 80px;
    height: 80px;
    margin-left: 17px;
    margin-top: 30px;
    border-radius: 13px;
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
`;

const Titlesection = styled.div`
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
    color: black;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  input::placeholder {
    color: #b8b8b8;
  }
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 18px;
  margin-bottom: 19px;

  input {
    border: 0;
    display: flex;
    width: 250px;
    flex-direction: column;
    flex-shrink: 0;
    color: black;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  input::placeholder {
    color: #b8b8b8;
  }

  p {
    margin: 0;
    font-family: Inter;
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
    width: 337px;
    height: 157px;
    flex-direction: column;
    flex-shrink: 0;
    color: black;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    white-space: pre-wrap;
    margin: 18px 30px;
  }

  textarea::placeholder {
    color: #b8b8b8;
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

  &:hover {
    filter: brightness(0.9);
  }
`;

const Check = styled.img`
  width: 5px;
  height: 5px;
  margin: 0px -25px 0px 20px;
`;

const UniText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: left;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;

  color: ${({ uni }) => (uni.length > 0 ? "black" : "#b8b8b8")};
`;
