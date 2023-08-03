import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/common/logo.png";
import back from "../../assets/common/back.png";
import { useNavigate } from "react-router-dom";
//사용방법
//헤더가 상단 고정이라 다음에 이어질 컴포넌트가 있다면
//padding-top: 97px 넣어주셔야 헤더에 안가려집니다.
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
        <p className="logo">
          <img src={logo} alt="로고" />
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
