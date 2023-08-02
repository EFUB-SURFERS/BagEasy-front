import React, { useState } from "react";
import Comment from "./Comment";
import { styled } from "styled-components";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";

const CommentReplies = ({
  comment,
  nickname,
  refresh,
  setRefresh,
  postWriter,
}) => {
  const [replying, setReplying] = useState(false);

  return (
    <Root>
      <Comment
        comment={comment}
        setReplying={setReplying}
        nickname={nickname}
        setRefresh={setRefresh}
        postWriter={postWriter}
        commentWriter={comment.writer}
      />
      <ReplyList
        commentId={comment.commentId}
        setReplying={setReplying}
        nickname={nickname}
        refresh={refresh}
        setRefresh={setRefresh}
        postWriter={postWriter}
        commentWriter={comment.writer}
      />
      {replying && (
        <ReplyInput
          comment={comment}
          setRefresh={setRefresh}
          setReplying={setReplying}
        />
      )}
    </Root>
  );
};

const Root = styled.div``;

export default CommentReplies;
