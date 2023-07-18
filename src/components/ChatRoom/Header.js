import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = buyerId => {
  const [isFinished, setIsFinished] = useState(false);
  const [isSold, setIsSold] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  //거래 확정 버튼은 판매자에게만 보이게
  //판매글 상세 조회에서 글 작성한 사람 아이디와 자신의 멤버아이디 비교
  //상세조회 api에서 postId, 제목, 판매완료여부, 가격, 이미지 1개 겟하기

  //거래 성사시 판매완료 여부 수정 api 요청은 모달에서 진행. 모달로 buyerId, postId 넘겨주기

  //겟 요청 결과
  const [dealData, setDealData] = useState({});

  useEffect(() => {
    //postId로 상세정보 조회
    const res = {
      postId: 7,
      sellerId: 1,
      postTitle: "test",
      postContent: "쌉니다",
      price: 600,
      isSold: false,
      buyerId: null,
      createdAt: "2023-07-15T00:01:51.817582",
      modifiedAt: "2023-07-15T00:01:51.817582",
      imageResponseDtos: [
        {
          imageId: 9,
          imageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/bageasy/post/image/d953fdec-b85f-4ce9-b7f5-7ac5576b8e05.jpg",
          postId: 7,
        },
      ],
    };
    setDealData(res);
  }, []);

  //buyerId 는 chatRoomPage에서 받아오기 (판매자 누군지 판별한뒤 남은 멤버)
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HeaderDiv>
        <Btn
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={back} alt="뒤로가기" />
        </Btn>
        <ItemContainer>
          <ItemImg $isSold={isSold}>
            {dealData.imageResponseDtos && (
              <img
                src={dealData.imageResponseDtos[0].imageUrl}
                alt="물건이미지"
              />
            )}
          </ItemImg>
          <div>
            <div className="wrapper">
              <p className="isSold">{isSold ? "판매완료" : "판매중"}</p>
              <Title $isSold={isSold}>{dealData.postTitle}</Title>
            </div>
            <div className="wrapper">
              <p className="price">{dealData.price}</p>
              {isFinished ? (
                <FinishBtn $isFinished={isFinished}>거래 확정</FinishBtn>
              ) : (
                <FinishBtn onClick={openModal} $isFinished={isFinished}>
                  거래 확정하기
                </FinishBtn>
              )}
              {isOpen ? (
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setIsFinished={setIsFinished}
                  isFinished={isFinished}
                  setIsSold={setIsSold}
                  isSold={isSold}
                  postId={dealData.postId}
                  buyerId={buyerId}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </ItemContainer>
      </HeaderDiv>
    </div>
  );
};

export default Header;
const FinishBtn = styled.div`
  width: 131px;
  height: 28px;
  border-radius: 10px;
  background: ${props => (props.$isFinished ? "#D9D9D9" : "#ffc700")};
  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 6px;
`;
const ItemContainer = styled.div`
  display: flex;
  p {
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    .isSold {
      margin: 28px 0px 0px 11px;
      color: #f00;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      white-space: nowrap;
    }
  }

  .price {
    width: 120px;
    margin-left: 11px;
    margin-top: 4px;
    color: #6d6d6d;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ItemImg = styled.div`
  margin: 20px 0px 0px 19px;
  width: 44px;
  height: 44px;
  border-radius: 35px;
  background: #a1a1a1;
  display: flex;
  mix-blend-mode: ${props => props.$isSold && "luminosity"};
  img {
    width: 44px;
    height: 44px;
    border-radius: 35px;
  }
`;

const Title = styled.div`
  width: 222px;
  margin: 24px 0px 0px 4px;
  color: ${props => (props.$isSold ? "#848484" : "#000")};
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const HeaderDiv = styled.div`
  height: 97px;
  background: #f9f9f9;
  display: flex;
`;
const Btn = styled.div`
  padding-top: 31px;
  padding-left: 15px;
  width: 16px;
  height: 24px;
  display: flex;
`;
