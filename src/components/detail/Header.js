import styled from "styled-components";

import logo from "../../assets/post/logo.png";
import revert from "../../assets/post/revert.png";

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
          <img src={revert} alt="뒤로가기" />
        </Btn>
        <Logo>
          <img src={logo} alt="로고" />
        </Logo>
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
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  position: relative;
`;

const Logo = styled.div`
  margin: 0;
  position: absolute;
  left: 50%;
  padding-top: 24px;
  padding-bottom: 22px;
  img {
    width: 58px;
    height: 22px;
    transform: translate(-50%, 0%);
  }
`;

const Btn = styled.div`
  padding-top: 19px;
  padding-left: 14px;
  padding-bottom: 14px;

  img {
    width: 16px;
    height: 24px;
  }
`;
