import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/logo.png";
import back from "../../assets/back.png";
const Header = () => {
  return (
    <div>
      <HeaderDiv>
        <Btn>
          <img src={back} />
        </Btn>
        <p className="logo">
          <img src={logo} />
        </p>
      </HeaderDiv>
    </div>
  );
};

export default Header;

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
