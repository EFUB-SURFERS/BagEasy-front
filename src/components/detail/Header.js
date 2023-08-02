import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/common/logo.png";
import back from "../../assets/common/back.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderDiv>
        <Btn
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={back} alt="뒤로가기" />
        </Btn>
        <p className="logo">
          <img src={logo} alt="로고" />
        </p>
      </HeaderDiv>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  z-index: 1;
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

  .logo {
    margin: 0;
    position: absolute;
    left: 50%;
    padding-top: 24px;
    img {
      width: 58px;
      height: 22px;
      transform: translate(-50%, 0%);
    }
  }
`;
const Btn = styled.div`
  padding-top: 25px;
  padding-left: 13px;
  width: 16px;
  height: 24px;
  display: flex;
`;
