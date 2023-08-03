import React from "react";
import { styled } from "styled-components";
import simpleLogo from "../../assets/itemListPage/simpleLogo.png";
import back from "../../assets/common/back.png";
import { useNavigate } from "react-router-dom";

const SimpleHeader = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Btn
        onClick={() => {
          navigate(-1);
        }}
      >
        <BtnImg src={back} />
      </Btn>
      <Logo
        onClick={() => {
          navigate("/home");
        }}
      >
        <LogoImg src={simpleLogo} alt="로고" />
      </Logo>
    </Wrapper>
  );
};

export default SimpleHeader;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background: #f9f9f9;
  display: flex;
`;

const Btn = styled.div`
  position: fixed;
  padding-top: 24px;
  padding-left: 13px;
  width: 16px;
  height: 24px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const BtnImg = styled.img``;

const Logo = styled.div`
  width: 25px;
  padding-top: 21px;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  width: 100%;
`;
