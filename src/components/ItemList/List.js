import React from "react";
import { styled } from "styled-components";
import Item from "./Item";

const List = () => {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: -1;
  //background: lightgreen;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 140px;
  margin-bottom: 60px;
  /* border: 1px solid black; */
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export default List;
