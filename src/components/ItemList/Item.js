import React from "react";
import styled from "styled-components";

const Item = () => {
  return (
    <Container>
      <Image src="itemImage.png" />
      <Info>
        <Name>머그컵</Name>
        <Price>15000원</Price>
        <Footer>
          <Tag>거래중</Tag>
          <Favorites>2</Favorites>
        </Footer>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  margin: 0px 10px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex: 1;
  border-bottom: 1px solid grey;
`;

const Image = styled.img`
  height: 12rem;
  width: 12rem;
  margin-right: 30px;
  background: lightgrey;
  box-sizing: border-box;
  flex: none;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: auto;
  /* background: beige; */
  box-sizing: border-box;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
  flex: none;
`;

const Price = styled.div`
  flex: none;
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
  padding: 0.3rem 1rem;
  flex: none;
`;

const Favorites = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: auto;
`;

export default Item;
