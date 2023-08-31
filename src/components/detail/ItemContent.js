import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Profile from "../Common/Profile";
import next from "../../assets/post/next.png";
import before from "../../assets/post/before.png";
import spot from "../../assets/post/spot.png";
import left from "../../assets/post/arrow-left.png";
import right from "../../assets/post/arrow-right.png";

const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 1,
  },
  1024: {
    items: 1,
  },
};

const ItemContent = ({
  sellerNickname,
  postTitle,
  postContent,
  imageResponseDtos,
  school,
  modifeddate,
}) => {
  const images = imageResponseDtos
    ? imageResponseDtos.map(item => item.imageUrl)
    : [];

  const date = modifeddate.slice(0, 10).replaceAll("-", ".");
  const renderPrevButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={left} className="prev-button" />;
  };

  const renderNextButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={right} className="next-button" />;
  };

  return (
    <Wrapper>
      <ImgaeBox>
        <AliceCarousel
          mouseTracking
          dotsDisabled={false}
          responsive={responsive}
          duration={400}
          startIndex={1}
          className="custom-carousel"
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          {imageResponseDtos.map(image => (
            <div key={image.imageId} className="imageContainer">
              <Img imageUrl={image.imageUrl} />
            </div>
          ))}
        </AliceCarousel>
      </ImgaeBox>
      <Seller>
        <SellerProfile>
          <Profile nickname={sellerNickname} width="50px" height="50px" />
        </SellerProfile>
        <SellerInfo>
          <SellerNickname>{sellerNickname}</SellerNickname>
          <SellerUniv>
            <img src={spot} />
            {school}
          </SellerUniv>
        </SellerInfo>
      </Seller>
      <Item>
        <ItemTitle>{postTitle}</ItemTitle>
        <ItemDate>{date}</ItemDate>
        <ItemDescription>{postContent}</ItemDescription>
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

const Img = styled.div`
  width: 390px;
  height: 315px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 80.21%,
      #fff 100%
    ),
    url(${props => props.imageUrl});
`;

const ImgaeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 315px;

  .prev-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 145px;
    left: 37%;

    @media (max-width: 800px) {
      top: 150px;
      left: 7.6px;
    }
  }

  .alice-carousel__next-btn,
  .alice-carousel__prev-btn {
    padding: 0;
  }

  .next-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 145px;
    right: 37%;

    @media (max-width: 800px) {
      right: 7.6px;
    }
  }

  .alice-carousel__stage-item * {
    line-height: initial;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imageContainer {
  }

  .alice-carousel__dots {
    position: absolute;
    left: 50%;
    top: 285px;
    margin: 0;
  }

  .alice-carousel__dots-item:not(.__custom).__active {
    border-radius: 6.781px;
    background: #fff;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
  }

  .alice-carousel__dots-item:not(.__custom) {
    border-radius: 6.781px;
    background: #383200;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
  }

  .alice-carousel__dots-item {
    margin: 0px 8px;
  }

  .alice-carousel__dots-item:not(.__custom):not(:last-child) {
    margin: auto;
  }
`;

const Seller = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 77px;

  border-bottom: 0.5px solid #808080;
`;

const SellerProfile = styled.div`
  width: 50px;
  height: 50px;

  /* margin-top: 17px; */
  margin-left: 16px;
  /* margin-bottom: 18px; */
`;

const SellerInfo = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  /* margin-top: 21px; */
  margin-left: 13px;
  width: 310px;
  height: 54px;
`;

const SellerNickname = styled.div`
  height: 25px;
  color: #000;
  font-family: Arial;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 5px;
`;

const SellerUniv = styled.div`
  font-family: Arial;
  font-style: regular;
  font-size: 13px;
  font-weight: 400;
  color: #848484;
  height: 21px;
  margin-top: 7px;

  img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-bottom: 0.5px solid #cecece;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #000000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding: 5px 20px;
  margin-top: 10px;
`;

const ItemDate = styled.div`
  display: flex;
  padding: 5px 20px;
  color: #c2c2c2;

  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 15px;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 20px 30px;
`;
