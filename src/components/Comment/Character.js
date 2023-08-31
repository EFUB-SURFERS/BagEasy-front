import React from "react";
import { styled } from "styled-components";
import character from "../../assets/itemListPage/character.png";

const Character = () => {
  return (
    <Root>
      <Img src={character} />
      <Text>구매자와의 컨택을 기다리고 있습니다!</Text>
    </Root>
  );
};

export default Character;

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 140px;
`;

const Text = styled.div`
  font-size: 12px;
`;
