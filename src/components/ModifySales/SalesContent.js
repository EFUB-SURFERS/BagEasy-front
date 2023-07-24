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

const SalesContent = ({ originalData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [modifiedData, setModifiedData] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      // 데이터를 받아온 후 modifiedData를 업데이트
      setModifiedData({
        uni: originalData?.school || "",
        title: originalData?.postTitle || "",
        price: originalData?.price || "",
        content: originalData?.postContent || "",
      });
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // 컴포넌트가 unmount되면 타이머를 클리어하여 메모리 누수 방지
  }, [originalData]);

  const images = originalData.imageResponseDtos
    ? originalData.imageResponseDtos.map(item => item.imageUrl)
    : [];

  const [imgFile, setImgFile] = useState(images); //전송할 이미지 데이터

  console.log("imageResponseDtos", originalData.imageResponseDtos);
  console.log("images", images);

  const [isOpen, setIsOpen] = useState(false); //모달 상태 관리
  const imgRef = useRef();
  if (loading) {
    return <div>Loading...</div>;
  }
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const saveImgFile = e => {
    const fileArr = imgRef.current.files;
    const fileURLList = Array.from(fileArr).map(file =>
      URL.createObjectURL(file),
    );
    const limitedFileURLList = fileURLList.slice(0, 10); // 미리보기 개수 최대 10개로 제한
    setImgFile(limitedFileURLList); //이미지 미리보기 데이터
    setModifiedData(prevData => ({ ...prevData, imgData: fileArr })); //이미지 전송 데이터
  };

  const handleRegisterButtonClick = async () => {
    const { uni, title, price, content, imgData } = modifiedData;
    if (imgFile && uni && title && price && content) {
      //모든 데이터가 있을때 등록 시도
      try {
        let data = {
          postTitle: title,
          postContent: content,
          price: price,
          school: uni,
        };
        const formData = new FormData();
        for (let i = 0; i < imgData.length; i++) {
          //순환문을 이용해서 이미지 배열 담기
          formData.append("image", imgData[i]);
        }
        formData.append(
          "dto",
          new Blob([JSON.stringify(data)], { type: "application/json" }),
        );
        const res = await createPost(formData);
        console.log("res.postId", res.postId);
        const postId = res.postId;
        alert("게시글이 등록되었습니다.");
        navigate(`/detail/` + postId); //등록 완료 후 해당글 상세페이지로 이동
      } catch (err) {
        console.log("error", err);
      }
    } else {
      alert("내용을 모두 채운 후 다시 등록해주세요.");
    }
  };

  return (
    <>
      <Header>
        <Delete onClick={() => navigate(-1)}>X</Delete>
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
          {imgFile ? (
            imgFile.map((fileURL, index) => <img key={index} src={fileURL} />)
          ) : (
            <img src={emptyimage} />
          )}
        </Images>
        <SubLine />
        <Unisection>
          {modifiedData.uni ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>학교</Title>
          <p>
            {modifiedData.uni && !isOpen
              ? modifiedData.uni
              : "학교를 선택해주세요"}
          </p>
          <ChoiceBtn onClick={toggleModal}>
            <img src={choiceuni} alt="검색" />
          </ChoiceBtn>
        </Unisection>
        <SubLine />
        <Titlesection>
          {modifiedData.title ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>제목</Title>
          <input
            placeholder="어떤 물품을 양도 중이신가요?"
            value={modifiedData.title}
            onChange={e => {
              setModifiedData(prevData => ({
                ...prevData,
                title: e.target.value,
              }));
            }}
          ></input>
        </Titlesection>
        <SubLine />
        <PriceSection>
          {modifiedData.price ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>가격</Title>
          <input
            placeholder="어느 정도의 가격에 판매하실 예정인가요?"
            value={modifiedData.price}
            onChange={e => {
              setModifiedData(prevData => ({
                ...prevData,
                price: e.target.value,
              }));
            }}
          />
        </PriceSection>
        <SubLine />
        <ContentSection>
          {modifiedData.content ? (
            <Check src={greenspot} />
          ) : (
            <Check src={redspot} />
          )}
          <Title>내용</Title>
          <textarea
            placeholder="구매에 도움이 될 만한 물품의 세부 사항(특징)을 알려주세요.
          ex) 구매일시, 사용 기간, 생활 오염 정도 등"
            value={modifiedData.content}
            onChange={e => {
              setModifiedData(prevData => ({
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
            uni={modifiedData.uni}
            setUni={uni => setModifiedData(prevData => ({ ...prevData, uni }))}
          />
        ) : null}
      </Wrapper>
    </>
  );
};
export default SalesContent;

const Header = styled.div`
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
