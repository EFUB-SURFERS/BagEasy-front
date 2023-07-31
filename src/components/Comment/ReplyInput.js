import React, { useState } from "react";
import { styled } from "styled-components";
import { createReply } from "../../api/replies";
import sendBtn from "../../assets/itemListPage/sendBtn.png";

const ReplyInput = ({ comment, setRefresh, setReplying }) => {
  const [replyContent, setReplyContent] = useState("");

  //대댓글 작성
  const postReply = () => {
    async function postData() {
      await createReply(comment.postId, comment.commentId, {
        replyContent: replyContent,
        isSecret: "false",
      });
    }
    if (replyContent) {
      postData();
      setReplyContent("");
      setRefresh(prev => prev + 1);
    }
    setReplying(false);
  };

  return (
    <Wrapper>
      <Input
        placeholder="답글 달기..."
        value={replyContent}
        onChange={e => setReplyContent(e.target.value)}
      />
      <SendBtn onClick={postReply}>
        <SendImg src={sendBtn} />
      </SendBtn>
    </Wrapper>
  );
};

export default ReplyInput;

const Wrapper = styled.div`
  padding: 5px 10px 7px 50px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  padding: 0px 10px;
  font-size: 12px;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b0b0b0;
  }
`;

const SendBtn = styled.div`
  width: 20px;
  margin-right: 20px;
  flex: none;
  position: absolute;
  right: 0px;
  top: 10px;
  box-sizing: border-box;
`;

const SendImg = styled.img`
  width: 100%;
`;
