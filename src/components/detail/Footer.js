import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import SubMenuModal from "./SubMenuModal";

import heart from "../../assets/heart.png";
import emptyheart from "../../assets/emptyheart.png";
import chatButton from "../../assets/chatButton.png";
import menubar from "../../assets/menubar.png";

const Footer = () => {
  const [isWirter, setIsWirter] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isHearted, setIsHearted] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit");
  };

  const handleDeleteClick = () => {
    navigate("/delete");
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prev => !prev);
  };

  const handleHeartClick = () => {
    setIsHearted(prev => !prev);
  };

  return (
    <Wrapper>
      <Heart>
        <HeartBtn
          src={isHearted ? heart : emptyheart}
          onClick={handleHeartClick}
        />
        <HeartCount>2</HeartCount>
      </Heart>
      <Line />
      <Price>30,000원</Price>
      {isWirter ? (
        <MenuBar src={menubar} onClick={toggleSubMenu} />
      ) : (
        <ChatButton src={chatButton}></ChatButton>
      )}
      {isSubMenuOpen && (
        <SubMenuModal
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
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
