import React, { useState, useEffect } from "react";
import styled from "styled-components";

import picture from "../../assets/picture.png";
import profile from "../../assets/profile.png";
import picture2 from "../../assets/picture2.png";
import next from "../../assets/next.png";
import before from "../../assets/before.png";
import heart from "../../assets/heart.png";
import chatButton from "../../assets/chatButton.png";

const ItemInfo = () => {
  const images = [picture, picture2]; //이미지배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 상태

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
      {/* <Seller>
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
      <Comment />
      <ItemDetail>
        <Heart>
          <HeartButton src={heart} />
          <HeartCount>2</HeartCount>
        </Heart>
        <Price>30000원</Price>
        <ChatButton src={chatButton}></ChatButton>
      </ItemDetail> */}
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  position: relative;

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

const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;
  height: 200px;

  padding-left: 23px;
  padding-right: 10px;

  border-bottom: 0.5px solid #cecece;
`;
const ItemTitle = styled.span`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 25px;
  margin-bottom: 20px;
  /* padding-top: 5px; */
`;
const ItemContent = styled.span`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Seller = styled.div`
  position: relative;
  display: flex;

  width: 389px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #808080;
`;
const SellerProfile = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 70%;

  margin: auto;
`;
const SellerInfo = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  padding-left: 7px;
  width: 310px;
  height: 54px;
`;
const SellerNickname = styled.span`
  font-family: "Arial";
  font-style: bold;
  font-size: 17px;
  font-weight: 600;

  margin-bottom: 5px;
  margin-top: 5px;
`;
const SellerUniv = styled.span`
  font-family: "Arial";
  font-style: regular;
  font-size: 13px;
  color: #848484;
`;

const Comment = styled.div``;

const ItemDetail = styled.div`
  position: relative;

  height: 68px;
  width: 390px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeartButton = styled.img`
  width: 24px;
  height: 23px;
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

  border-right: 0.5px solid #808080;
`;

const HeartCount = styled.span`
  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-top: 5px;
`;
const Price = styled.span`
  text-align: left;

  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  flex-shrink: 0;
  margin-left: 18px;
`;
const ChatButton = styled.img`
  width: 103px;
  height: 46px;

  margin-left: auto;
  margin-right: 15px;
`;
