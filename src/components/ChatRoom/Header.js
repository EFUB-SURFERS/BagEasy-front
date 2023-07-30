import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/chat/back.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { getDetail } from "../../api/posts";
import { getChatRoom } from "../../api/chat";
import TokenRefreshModal from "../Common/TokenRefreshModal";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomInfo, setRoomInfo] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [isSeller, setIsSeller] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState("false");

  const navigate = useNavigate();

  //경로에서 roomId 받아오기
  const { roomId } = useParams();

  const getHeaderData = async () => {
    const res = await getChatRoom(roomId);
    setRoomInfo(res);
    getPostData(res);
    checkIsSeller(res);
  };
  const getPostData = async room => {
    const res = await getDetail(room.postId);
    setPostInfo(res);
  };

  const checkIsSeller = async room => {
    //본인 프로필 조회
    //본인 닉네임과 판매자 닉네임 비교
    //같으면 거래 성사버튼 보이게 처리.
    const myNickname = localStorage.getItem("myNickname");

    if (myNickname === room.joinMember) {
      setIsSeller(true);
    }
  };

  useEffect(() => {
    //헤더에 보이는 정보 get
    //채팅방 개별 정보 조회로 룸아이디를 얻어 판매글 상세 정보 조회, 판매자인지 확인
    try {
      getHeaderData();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        //토큰 만료시 모달 띄우기
        localStorage.setItem("isExpired", true);
        setIsModalVisible(localStorage.getItem("isExpired"));
      }
    }
  }, []);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isModalVisible === "true" ? <TokenRefreshModal /> : null}
      <HeaderDiv>
        <Btn
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={back} alt="뒤로가기" />
        </Btn>
        <ItemContainer>
          <ItemImg $isSold={postInfo.isSold}>
            {postInfo.imageResponseDtos && (
              <img
                src={postInfo.imageResponseDtos[0].imageUrl}
                alt="물건이미지"
              />
            )}
          </ItemImg>
          <div>
            <div className="wrapper">
              <p className="isSold">
                {postInfo.isSold ? "판매완료" : "판매중"}
              </p>
              <Title $isSold={postInfo.isSold}>{postInfo.postTitle}</Title>
            </div>
            <div className="wrapper">
              <p className="price">{postInfo.price}원</p>
              {isSeller ? (
                <>
                  {postInfo.isSold ? (
                    <FinishBtn $isFinished={postInfo.isSold}>
                      거래 확정
                    </FinishBtn>
                  ) : (
                    <FinishBtn
                      onClick={openModal}
                      $isFinished={postInfo.isSold}
                    >
                      거래 확정하기
                    </FinishBtn>
                  )}
                </>
              ) : (
                <></>
              )}
              {isOpen ? (
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  isSold={postInfo.isSold}
                  postId={postInfo.postId}
                  buyerNickname={roomInfo.createMember}
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
