import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getDetail, deleteDetail } from "../../api/posts";

import SubMenuModal from "./SubMenuModal";

import heart from "../../assets/heart.png";
import emptyheart from "../../assets/emptyheart.png";
import chatButton from "../../assets/chatButton.png";
import soldButton from "../../assets/sold.png";
import menubar from "../../assets/menubar.png";

const Footer = ({ postId, sellerId, price, isSolded, myId }) => {
  const [isWirter, setIsWirter] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isHearted, setIsHearted] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = ({}) => {
    navigate("/modify/" + postId);
  };

  useEffect(() => {
    setIsWirter(sellerId === myId);
  }, [sellerId, myId]);

  const handleDeleteClick = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        const Id = postId;
        const deleteData = await deleteDetail(Id);
        console.log(deleteData);
        alert("게시글이 삭제되었습니다.");
        navigate(-1);
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prev => !prev);
  };

  const handleHeartClick = () => {
    setIsHearted(prev => !prev);
  };

  const handleChatClick = () => {
    // 후에 roomId받아서 채팅방으로 이동
    navigate("/chats/:roomId");
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
      <Price>{price}</Price>
      {isWirter ? (
        <MenuBar src={menubar} onClick={toggleSubMenu} />
      ) : isSolded ? (
        <Button src={soldButton}></Button>
      ) : (
        <Button src={chatButton} onClick={handleChatClick}></Button>
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

const Button = styled.img`
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
