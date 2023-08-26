import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Profile from "../Common/Profile";
import next from "../../assets/post/next.png";
import before from "../../assets/post/before.png";
import spot from "../../assets/post/spot.png";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = event => {
    event.stopPropagation();
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextImage = event => {
    event.stopPropagation();
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1,
    );
  };
  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  const date = modifeddate.slice(0, 10).replaceAll("-", ".");

  return (
    <Wrapper>
      <StyledCarousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        // infiniteLoop
        emulateTouch={true}
        prevArrow={
          <button type="button" class="slick-next">
            df
          </button>
        }
      >
        {imageResponseDtos.map(image => (
          <div key={image.imageId} className="imageContainer">
            <Img src={image.imageUrl} alt={image.imageId} />
          </div>
        ))}
      </StyledCarousel>
      {/* <ItemImages
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      > */}
      {/* {!isFirstImage && (
          <BeforeBtn onClick={handlePreviousImage}>
            <img src={before} alt="뒤로가기" />
          </BeforeBtn>
        )}
        {!isLastImage && (
          <NextBtn onClick={handleNextImage}>
            <img src={next} alt="다음가기" />
          </NextBtn>
        )} */}
      {/* </ItemImages> */}
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
const StyledCarousel = styled(Carousel)`
  .carousel .slider {
    width: 25rem;
    height: 22rem;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .imageContainer {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 80.21%,
      #fff 100%
    );
  }
  /* display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;
const ItemImages = styled.div`
  width: 390px;
  height: 390px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Img = styled.img`
  width: 300px;
  height: 390px;
  background-size: cover;
  background-position: center;
  position: relative;

  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80.21%, #fff 100%); */
`;

const NextBtn = styled.div`
  position: absolute;
  right: 0;
  img {
    width: 22px;
    height: 83px;
    padding-top: 153px;
    padding-right: 20px;
  }
`;

const BeforeBtn = styled.div`
  position: absolute;
  left: 0;
  img {
    width: 22px;
    height: 83px;
    padding-top: 153px;
    padding-left: 20px;
  }
`;

const Seller = styled.div`
  position: relative;
  display: flex;

  width: 100%;

  border-bottom: 0.5px solid #808080;
`;

const SellerProfile = styled.div`
  width: 50px;
  height: 50px;

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
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SellerUniv = styled.div`
  font-family: Arial;
  font-style: regular;
  font-size: 13px;
  color: #848484;

  img {
    width: 12px;
    height: 12px;
    margin-top: 6px;
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
  font-weight: 550;
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
  /* white-space: pre-wrap; */
  padding: 0px 20px 30px;
`;
