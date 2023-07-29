import React from "react";
import Comment from "./Comment";
import { styled } from "styled-components";
import ReplyList from "./ReplyList";

const CommentReplies = ({ comment }) => {
  return (
    <Root>
      <Comment comment={comment} />
      <ReplyList commentId={comment.commentId} />
    </Root>
  );
};

const Root = styled.div``;

export default CommentReplies;
