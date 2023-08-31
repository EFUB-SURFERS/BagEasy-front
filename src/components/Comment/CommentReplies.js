import React, { useState } from "react";
import Comment from "./Comment";
import { styled } from "styled-components";
import ReplyList from "./ReplyList";

const CommentReplies = ({
  comment,
  nickname,
  setReplying,
  refresh,
  setRefresh,
  postWriter,
  setIsModalVisible,
}) => {
  return (
    <Root>
      <Comment
        comment={comment}
        setReplying={setReplying}
        nickname={nickname}
        setRefresh={setRefresh}
        postWriter={postWriter}
        commentWriter={comment.writer}
        setIsModalVisible={setIsModalVisible}
      />
      <ReplyList
        originComment={comment} //원댓글
        setReplying={setReplying}
        nickname={nickname}
        refresh={refresh}
        setRefresh={setRefresh}
        postWriter={postWriter}
        commentWriter={comment.writer}
        setIsModalVisible={setIsModalVisible}
      />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

export default CommentReplies;
