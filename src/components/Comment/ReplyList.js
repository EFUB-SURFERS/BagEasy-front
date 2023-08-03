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
  postWriter,
  commentWriter,
  setIsModalVisible,
}) => {
  const [replies, setReplies] = useState([]);

  //대댓글 조회
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getReplies(commentId);
        setReplies(data);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
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
            postWriter={postWriter}
            commentWriter={commentWriter}
            setIsModalVisible={setIsModalVisible}
          />
        ))}
    </Root>
  );
};

export default ReplyList;

const Root = styled.div``;
