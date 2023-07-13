import React, { useState, useEffect } from "react";

import styled from "styled-components";

import heart from "../../assets/heart.png";
import chatButton from "../../assets/chatButton.png";
import menubar from "../../assets/menubar.png";

const Footer = () => {
  const [isWirter, setIsWirter] = useState(false);

  return (
    <Wrapper>
      <Heart>
        <HeartBtn src={heart} />
        <HeartCount>2</HeartCount>
      </Heart>
      <Line />
      <Price>30,000원</Price>
      {isWirter ? (
        <MenuBar src={menubar} />
      ) : (
        <ChatButton src={chatButton}></ChatButton>
      )}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 75px;
  justify-content: center;
  background: #ffffff;
  border-top: 0.5px solid #808080;
`;

const HeartBtn = styled.img`
  width: 24px;
  height: 23px;

  flex-shrink: 0;
  fill: #eb6060;
`;
const Heart = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding-bottom: 3px;
  padding-left: 21px;
  padding-right: 21px;
`;

const HeartCount = styled.div`
  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-top: 5px;
`;

const Line = styled.div`
  width: 0.5px;
  height: 48px;
  background: #808080;
  margin-top: 16px;
`;

const Price = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-top: 24px;
  margin-left: 18px;
`;

const ChatButton = styled.img`
  width: 103px;
  height: 46px;

  margin-left: auto;
  margin-right: 15px;
  margin-top: 16px;
  flex-shrink: 0;
`;

const MenuBar = styled.img`
  width: 38px;
  height: 38px;
  margin-left: auto;
  margin-right: 15px;
  margin-top: 16px;
  flex-shrink: 0;
`;
