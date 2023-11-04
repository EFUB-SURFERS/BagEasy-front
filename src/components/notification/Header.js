import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import back from "../../assets/common/back.png";
import logo from "../../assets/itemListPage/logo.png";
import notification from "../../assets/itemListPage/notification.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <Wrapper>
        <BackButton onClick={() => navigate(-1)}>
          <Img src={back} />
        </BackButton>
        <Logo
          onClick={() => {
            navigate("/home");
          }}
        >
          <Img src={logo} alt="로고" />
        </Logo>
        <NotificationBtn onClick={() => navigate("/notification")}>
          <Img src={notification} />
        </NotificationBtn>
      </Wrapper>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 160px;
  &:hover {
    cursor: pointer;
  }
`;

const BackButton = styled.div`
  width: 38px;
  &:hover {
    cursor: pointer;
  }
`;

const NotificationBtn = styled.div`
  width: 18px;
  &:hover {
    cursor: pointer;
  }
  padding: 0px 10px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
