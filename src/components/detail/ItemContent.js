import React, { useState, useEffect } from "react";

import styled from "styled-components";

import picture from "../../assets/picture.png";
import profile from "../../assets/profile.png";
import picture2 from "../../assets/picture2.png";
import next from "../../assets/next.png";
import before from "../../assets/before.png";

const ItemContent = () => {
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
    <Wrapper>
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
        <ItemDescription>
          4개월동안 사용했습니다. <br />
          상태 아주 깨끗하고 좋아요. <br />
          거래 전에 세탁해서 드립니다. <br />
          연락 많이 주세요!
        </ItemDescription>
      </Item>
    </Wrapper>
  );
};

export default ItemContent;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const ItemDescription = styled.div`
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