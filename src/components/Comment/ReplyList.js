import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReplies } from "../../api/replies";
import Comment from "./Comment";

const ReplyList = ({
  commentId,
  setReplying,
  nickname,
  refresh,
  setRefresh,
}) => {
  const [replies, setReplies] = useState([]);

  //대댓글 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getReplies(commentId);
      setReplies(data);
    }
    fetchData();
  }, [refresh]);

  return (
    <Root>
      {replies &&
        replies.map((reply, key) => (
          <Comment
            comment={reply}
            isReply={true}
            key={key}
            setReplying={setReplying}
            nickname={nickname}
            setRefresh={setRefresh}
          />
        ))}
    </Root>
  );
};

export default ReplyList;

const Root = styled.div``;
