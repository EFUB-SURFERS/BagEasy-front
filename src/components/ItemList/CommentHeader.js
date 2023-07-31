import React from "react";
import openArrow from "../../assets/itemListPage/openArrow.png";
import closeArrow from "../../assets/itemListPage/closeArrow.png";
import { styled } from "styled-components";

const CommentHeader = ({ comments, open, setOpen }) => {
  return (
    <Header>
      <Text>댓글</Text>
      <Count>{`${comments.length}개`}</Count>
      <ArrowWrapper
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        <Arrow src={open ? closeArrow : openArrow} />
      </ArrowWrapper>
    </Header>
  );
};

export default CommentHeader;

const Header = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 4px 13px;
`;

const Text = styled.div`
  padding-right: 5px;
`;

const Count = styled.div`
  color: #848484;
  font-size: 12px;
`;

const ArrowWrapper = styled.div`
  margin-left: auto;
  margin-top: 2px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.img`
  width: 100%;
`;
