import React from "react";
import styled from "styled-components";
import postImg from "../../assets/postImg.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <PostBtn>
        <PostImg src={postImg} />
        <PostText>글쓰기</PostText>
      </PostBtn>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  height: 60px;
  background: white;
  border-top: 1px solid lightgrey;
  bottom: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: fixed;
  /* z-index: 10; */
  /* flex: 1; */
`;

const PostBtn = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 100px;
  background: #ffc700;
  margin: 0px 10px;
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
`;

const PostImg = styled.img`
  width: 20px;
  margin-left: 10px;
`;

const PostText = styled.div`
  color: white;
  font-weight: bold;
  margin-left: 7px;
`;

export default Footer;
