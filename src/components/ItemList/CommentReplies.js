import React, { useState } from "react";
import Comment from "./Comment";
import { styled } from "styled-components";
import ReplyList from "./ReplyList";
import sendBtn from "../../assets/itemListPage/sendBtn.png";
import { createReply } from "../../api/replies";
import { getMyProfile } from "../../api/member";

const CommentReplies = ({ comment }) => {
  const [replying, setReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  //대댓글 작성
  const postReply = () => {
    async function postData() {
      await createReply(comment.postId, comment.commentId, {
        nickname: await getMyProfile().nickname,
        replyContent: replyContent,
        isSecret: "false",
      });
    }
    if (replyContent) {
      postData();
      setReplyContent("");
    }
    setReplying(false);
  };

  return (
    <Root>
      <Comment comment={comment} setReplying={setReplying} />
      <ReplyList commentId={comment.commentId} setReplying={setReplying} />
      {replying && (
        <Wrapper>
          <ReplyInput
            placeholder="답글 달기..."
            value={replyContent}
            onChange={e => setReplyContent(e.target.value)}
          />
          <SendBtn onClick={postReply}>
            <SendImg src={sendBtn} />
          </SendBtn>
        </Wrapper>
      )}
    </Root>
  );
};

const Root = styled.div`
  //outline: 1px solid red;
`;

const Wrapper = styled.div`
  padding: 5px 10px 7px 50px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const ReplyInput = styled.input`
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

export default CommentReplies;
