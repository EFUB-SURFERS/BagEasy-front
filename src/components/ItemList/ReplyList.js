import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";
import dots from "../../assets/itemListPage/dots.png";
import { getReplies } from "../../api/replies";
import Comment from "./Comment";

const mockReplies = [
  {
    replyId: 2,
    commentId: 2,
    memberId: 1,
    replyContent: "대댓글..!!!!!",
    isSecret: true,
  },
  {
    replyId: 2,
    commentId: 2,
    memberId: 1,
    replyContent: "헤헤 된당",
    isSecret: true,
  },
];

const ReplyList = ({ commentId }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getReplies(commentId);
      setReplies(data);
    }
    fetchData();
  }, []);

  return (
    <Root>
      {mockReplies.map((reply, key) => (
        <Comment comment={reply} isReply={true} key={key} />
      ))}
    </Root>
  );
};

export default ReplyList;

const Root = styled.div``;
