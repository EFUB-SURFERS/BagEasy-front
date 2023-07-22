import styled from "styled-components";

import logo from "../../assets/logo.png";
import revert from "../../assets/revert.png";
import trash from "../../assets/trash.png";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
      {/* <Trash>
        <img src={trash} alt="휴지통" />
      </Trash> */}
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 68px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
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

const Trash = styled.div`
  padding-top: 17px;
  padding-right: 21px;
  padding-bottom: 14px;

  img {
    width: 30px;
    height: 38.716px;
  }
`;

const Btn = styled.div`
  padding-top: 19px;
  padding-left: 14px;
  padding-bottom: 14px;

  img {
    width: 20px;
    height: 35px;
  }
`;
