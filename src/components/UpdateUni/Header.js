import React from "react";
import { styled } from "styled-components";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderDiv>
        <Btn
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={back} alt="뒤로가기" />
        </Btn>
        <p className="title">파견교 변경</p>
        <p
          className="finish"
          onClick={() => {
            navigate(-1);
          }}
        >
          완료
        </p>
      </HeaderDiv>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 97px;
  background: #f9f9f9;
  display: flex;
  position: relative;

  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .finish {
    position: absolute;
    right: 10px;

    display: flex;
    width: 42px;
    height: 18px;
    flex-direction: column;
    flex-shrink: 0;
    color: #848484;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Btn = styled.div`
  padding-top: 25px;
  padding-left: 13px;
  width: 16px;
  height: 24px;
  display: flex;
`;
