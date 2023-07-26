import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/chat/back.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { getDetail } from "../../api/posts";
import { getMyProfile } from "../../api/member";
const Header = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [isSold, setIsSold] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let sellerId, buyerId;
  const navigate = useNavigate();

  //경로에서 roomId 받아오기
  const { roomId } = useParams();
  console.log(roomId);

  //판매글 상세 정보 저장
  const [detail, setDetail] = useState({});

  useEffect(() => {
    //룸아이디로 채팅방 정보 조회 (postId, createMember, joinMember)
    //buyerId= createMember , seller=joinMember
    //거래 확정 모달에 buyerId, postId 넘기기
    //const [roomInfo,setRoomInfo]=useState();
    //
    //
    //본인 프로필 조회
    //본인 아이디와 판매자 아이디 비교
    //같으면 거래 성사버튼 보이게
    const myProfile = getMyProfile();
    if (myProfile.memberId) {
    }
    //
    //
    //postId로 상세정보 조회
    //const res = getDetail(postId);
    //setDetail(res);
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
            {detail.imageResponseDtos && (
              <img
                src={detail.imageResponseDtos[0].imageUrl}
                alt="물건이미지"
              />
            )}
          </ItemImg>
          <div>
            <div className="wrapper">
              <p className="isSold">{isSold ? "판매완료" : "판매중"}</p>
              <Title $isSold={isSold}>{detail.postTitle}</Title>
            </div>
            <div className="wrapper">
              <p className="price">{detail.price}</p>
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
                  postId={detail.postId}
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
