import React, { useState } from "react";
import { styled } from "styled-components";

import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [finished, setFinished] = useState(false);
  const [isSold, setIsSold] = useState(false);
  const navigate = useNavigate();
  const toggleFinished = () => {
    setFinished(!finished);
    setIsSold(!isSold);
    /*거래 취소하기 / 거래 성사하기 텍스트 문구 정하기 
    거래 성사 = 판매완료 처리
    글 삭제시..? => 판매완료처리..?*/
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
          <p className="itemImg">
            <img src={"itemImg"} alt="물건이미지" />
          </p>

          <div>
            <div className="wrapper">
              <p className="isSold">{isSold ? "판매완료" : "판매중"}</p>
              <Title isSold={isSold}>이불, 침대시트, 베개 판매합니다.</Title>
            </div>
            <div className="wrapper">
              <p className="price">30000원</p>
              <FinishBtn onClick={toggleFinished} finished={finished}>
                {finished ? "거래 취소하기" : "거래 성사하기"}
              </FinishBtn>
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
  background: ${props => (props.finished ? "#D9D9D9" : "#ffc700")};
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
  margin-left: 28px;
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

  .itemImg {
    margin: 20px 0px 0px 19px;
    width: 44px;
    height: 44px;
    border-radius: 35px;
    background: #a1a1a1;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    .isSold {
      margin: 28px 0px 0px 11px;
      max-width: 50px;
      color: #f00;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .price {
    width: 95px;
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
const Title = styled.div`
  width: 222px;
  margin: 24px 0px 0px 4px;
  color: ${props => (props.isSold ? "#848484" : "#000")};
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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
