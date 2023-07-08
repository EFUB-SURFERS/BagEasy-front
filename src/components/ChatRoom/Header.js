import React from "react";
import { styled } from "styled-components";

import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderDiv>
        <Btn
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={back} />
        </Btn>
        <ItemContainer>
          <p className="itemImg">
            <img src={"itemImg"} />
          </p>

          <div>
            <div className="wrapper">
              <p className="status">판매완료</p>
              <p className="title">이불, 침대시트, 베개 판매합니다.</p>
            </div>
            <p className="price">30000원</p>
          </div>
        </ItemContainer>
      </HeaderDiv>
    </div>
  );
};

export default Header;
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
    .status {
      margin: 28px 0px 0px 11px;

      color: #f00;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .title {
      width: 230px;
      margin: 24px 0px 0px 4px;
      color: #000;
      font-family: Noto Sans KR;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .price {
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
