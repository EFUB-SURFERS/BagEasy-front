import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/common/back.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { getDetail } from "../../api/posts";
import { getChatRoom } from "../../api/chat";
import { getMyProfile } from "../../api/member";
const Header = ({ setIsModalVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomInfo, setRoomInfo] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [isSeller, setIsSeller] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  //경로에서 roomId 받아오기
  const { roomId } = useParams();

  const getHeaderData = async () => {
    try {
      const res = await getChatRoom(roomId);
      const mydata = await getMyProfile();
      setRoomInfo(res);
      getPostData(res);
      checkIsSeller(res, mydata);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };
  const getPostData = async room => {
    try {
      const res = await getDetail(room.postId);
      setPostInfo(res);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        //토큰 만료시 모달 띄우기
        setIsModalVisible(true);
      }
    }
  };

  const checkIsSeller = async (room, mydata) => {
    //본인 프로필 조회
    //본인 닉네임과 판매자 닉네임 비교
    //같으면 거래 성사버튼 보이게 처리.
    if (mydata.nickname === room.joinMember) {
      setIsSeller(true);
    }
  };

  useEffect(() => {
    //헤더에 보이는 정보 get
    //채팅방 개별 정보 조회로 룸아이디를 얻어 판매글 상세 정보 조회, 판매자인지 확인
    getHeaderData();
  }, [isUpdate]);

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
            <div className="wrapper-2nd">
              <p className="price">
                {postInfo.price} <p className="won">원</p>
              </p>

              {true ? (
                <>
                  {postInfo.isSold ? (
                    <FinishBtn $isFinished={postInfo.isSold}>
                      거래 확정 완료
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
                  setIsUpdate={setIsUpdate}
                  isUpdate={isUpdate}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  isSold={postInfo.isSold}
                  postId={postInfo.postId}
                  buyerNickname={roomInfo.createMember}
                  setIsModalVisible={setIsModalVisible}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </ItemContainer>
      </HeaderDiv>
      <Line />
    </div>
  );
};

export default Header;
const FinishBtn = styled.div`
  border-radius: 13px;
  background: #0e312b;
  width: 115px;
  height: 26px;
  flex-shrink: 0;
  box-sizing: border-box;
  background: ${props => (props.$isFinished ? "#9B9B9B" : "#0e312b")};

  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;
const ItemContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  margin-left: 13px;
  p {
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 18px;
    align-items: center;

    .isSold {
      color: #eb6060;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      white-space: nowrap;
      width: 46px;
    }
  }

  .wrapper-2nd {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 18px;
    align-items: center;
    justify-content: space-between;
  }

  .price {
    margin-top: 7px;
    display: flex;
    width: 125px;
    color: #9b9b9b;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .won {
    color: #9b9b9b;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const ItemImg = styled.div`
  margin-right: 16px;
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
  width: 214px;
  flex-shrink: 0;

  color: ${props => (props.$isSold ? "#848484" : "#000")};
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  padding-bottom: 7px;

  display: flex;

  background: #fff;
  display: flex;
`;
const Btn = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
`;
const Line = styled.div`
  background: #f4f4f4;
  height: 1px;
`;
