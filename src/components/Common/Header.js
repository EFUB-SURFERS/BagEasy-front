import React from "react";
import { styled } from "styled-components";
import headerLogo from "../../assets/common/headerLogo.png";
import back from "../../assets/common/back.png";
import alarm from "../../assets/common/alarm.png";
import menu from "../../assets/common/menu.png";
import { useNavigate } from "react-router-dom";
//사용방법
//헤더가 상단 고정이라 다음에 이어질 컴포넌트가 있다면
//padding-top: 38px, 46px  넣어주셔야 헤더에 안가려집니다.
/*  height: 38px;
  @media (max-width: 768px) {
    //모바일
    height: 46px;
  }
*/
const Header = ({ isMenu = true }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderDiv>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={back} alt="뒤로가기" />
        </BackBtn>
        <p
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={headerLogo} alt="로고" />
        </p>
        {isMenu ? (
          <Menu>
            <img src={menu} alt="메뉴" />
          </Menu>
        ) : (
          <Alarm>
            <img src={alarm} alt="알림" />
          </Alarm>
        )}
      </HeaderDiv>
      <Line />
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
  height: 38px;
  @media (max-width: 768px) {
    //모바일
    height: 46px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: 0;
    margin-top: 2px;
    img {
      width: 160px;
      height: 18px;
      flex-shrink: 0;
    }
  }
`;
const BackBtn = styled.div`
  width: 38px;
  height: 38px;
  display: flex;

  img {
    width: 38px;
    height: 38px;
  }
`;
const Alarm = styled.div`
  margin-right: 17px;
  margin-top: 2px;
  img {
    width: 17px;
    height: 21px;
    flex-shrink: 0;
  }
`;
const Line = styled.div`
  background: #f4f4f4;
  height: 1px;
`;
const Menu = styled.div`
  margin-right: 17px;
  margin-top: 2px;
  img {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;
