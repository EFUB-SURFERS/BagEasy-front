import React from "react";
import styled from "styled-components";
import heartImg from "../../assets/heartImg.png";
import itemImg from "../../assets/itemImg.png";

const Item = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={itemImg} />
      </ImageWrapper>

      <Info>
        <Name>머그컵</Name>
        <Price>15000원</Price>
        <Footer>
          <Tag>판매중</Tag>
          <Favorites>
            <HeartImg src={heartImg} />
            <FavoritesNum>2</FavoritesNum>
          </Favorites>
        </Footer>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  margin: 0rem 1.7rem;
  padding: 1.7rem 0rem;
  //height: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  //background: beige;
`;

const ImageWrapper = styled.div`
  width: 7rem;
  height: 0;
  padding-bottom: 7rem;
  //margin-right: 0.7rem;
  /* outline: 1px solid grey; */
  box-sizing: border-box;
  flex: none;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  //height: 100%;
`;

const Info = styled.div`
  height: 7rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  //height: 10rem;
  /* background: beige; */
  box-sizing: border-box;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  flex: none;
`;

const Price = styled.div`
  flex: none;
  font-size: 16px;
  color: grey;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: auto;
`;

const Tag = styled.div`
  background: #ffc700;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 0.3rem 1rem;
  flex: none;
`;

const Favorites = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
`;

const HeartImg = styled.img`
  width: 18px;
  transform: translateY(1px);
  /* border: 1px solid blue; */
`;

const FavoritesNum = styled.div`
  margin-left: 5px;
  /* font-weight: bold; */
  font-size: 20px;
  /* border: 1px solid red; */
`;

export default Item;
