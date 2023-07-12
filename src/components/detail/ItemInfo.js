import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Comment from "../ItemList/Comment";
import CommentList from "../ItemList/CommentList";

import picture from "../../assets/picture.png";
import profile from "../../assets/profile.png";
import picture2 from "../../assets/picture2.png";
import next from "../../assets/next.png";
import before from "../../assets/before.png";
import heart from "../../assets/heart.png";
import chatButton from "../../assets/chatButton.png";
import menubar from "../../assets/menubar.png";

const ItemInfo = () => {
  const images = [picture, picture2]; //이미지배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 상태

  const [isWirter, setIsWirter] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1,
    );
    console.log(currentImageIndex);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
    console.log(currentImageIndex);
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <Div>
      <ItemImages
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {!isFirstImage && (
          <BeforeBtn onClick={handlePreviousImage}>
            <img src={before} alt="뒤로가기" />
          </BeforeBtn>
        )}
        {!isLastImage && (
          <NextBtn onClick={handleNextImage}>
            <img src={next} alt="다음가기" />
          </NextBtn>
        )}
      </ItemImages>
      <Seller>
        <SellerProfile src={profile} />
        <SellerInfo>
          <SellerNickname>jjm0829</SellerNickname>
          <SellerUniv>University of Northern Colorado</SellerUniv>
        </SellerInfo>
      </Seller>
      <Item>
        <ItemTitle>이불, 침대시트, 베개 판매합니다.</ItemTitle>
        <ItemContent>
          4개월동안 사용했습니다. <br />
          상태 아주 깨끗하고 좋아요. <br />
          거래 전에 세탁해서 드립니다. <br />
          연락 많이 주세요!
        </ItemContent>
      </Item>
      <CommentList />
      <Comment />
      <ItemDetail>
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
      </ItemDetail>
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 68px;
`;

const ItemImages = styled.div`
  width: 390px;
  height: 390px;
  background-size: cover;
  background-position: center;
`;

const NextBtn = styled.div`
  position: absolute;
  img {
    width: 14px;
    height: 83px;
    padding-top: 153px;
    padding-left: 354px;
  }
`;

const BeforeBtn = styled.div`
  position: absolute;
  img {
    width: 14px;
    height: 83px;
    padding-top: 153px;
    padding-left: 22px;
  }
`;

const Seller = styled.div`
  position: relative;
  display: flex;

  width: 100%;

  border-bottom: 0.5px solid #808080;
`;

const SellerProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  margin-top: 17px;
  margin-left: 16px;
  margin-bottom: 18px;
`;

const SellerInfo = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  margin-top: 21px;
  margin-left: 13px;
  width: 310px;
  height: 54px;
`;
const SellerNickname = styled.div`
  color: #000;
  font-family: Arial;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SellerUniv = styled.div`
  font-family: Arial;
  font-style: regular;
  font-size: 13px;
  color: #848484;

  margin-top: 6px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 200px;

  padding-left: 23px;
  padding-right: 10px;

  border-bottom: 0.5px solid #cecece;
`;
const ItemTitle = styled.div`
  display: flex;
  width: 361px;
  height: 48px;
  flex-direction: column;
  justify-content: center;

  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-left: 23px;
  padding-top: 10px;
  flex-shrink: 0;
`;
const ItemContent = styled.span`
  display: flex;
  width: 362px;
  height: 202px;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 23px;
`;

// const Comment = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   height: 150px;

//   border-bottom: 0.5px solid #808080;
// `;

const ItemDetail = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 75px;
  justify-content: center;
  background: #ffffff;
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
