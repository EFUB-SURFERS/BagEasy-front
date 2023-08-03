import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/itemListPage/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate("/home");
        }}
      >
        <Img src={logo} alt="로고" />
      </Logo>
    </Wrapper>
  );
};

export default Header;

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

const Logo = styled.div`
  width: 124px;
  margin-left: 21px;
  padding-top: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
`;
