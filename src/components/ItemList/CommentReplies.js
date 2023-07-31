import React, { useState } from "react";
import Comment from "./Comment";
import { styled } from "styled-components";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";

const CommentReplies = ({ comment, nickname, refresh, setRefresh }) => {
  const [replying, setReplying] = useState(false);

  return (
    <Root>
      <Comment
        comment={comment}
        setReplying={setReplying}
        nickname={nickname}
        setRefresh={setRefresh}
      />
      <ReplyList
        commentId={comment.commentId}
        setReplying={setReplying}
        nickname={nickname}
        refresh={refresh}
        setRefresh={setRefresh}
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
