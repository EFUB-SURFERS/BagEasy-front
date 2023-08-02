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
