import React from "react";
import { styled } from "styled-components";

const CommentHeader = ({ comments }) => {
  return (
    <Header>
      <Text>댓글</Text>
      <Count>{`${comments.length}개`}</Count>
    </Header>
  );
};

export default CommentHeader;

const Header = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 4px 13px;
`;

const Text = styled.div`
  font-size: 12px;
  padding-right: 5px;
  /* border: 1px solid lightgrey; */
`;

const Count = styled.div`
  padding-top: 2px;
  color: #848484;
  font-size: 10px;
  /* border: 1px solid lightgrey; */
`;
