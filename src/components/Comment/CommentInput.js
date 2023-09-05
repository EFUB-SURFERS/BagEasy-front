import React, { useEffect, useState } from "react";
import { createComment } from "../../api/comments";
import { getMyProfile } from "../../api/member";
import sendBtn from "../../assets/itemListPage/sendBtn.png";
import lockDark from "../../assets/itemListPage/lockDark.png";
import lockLight from "../../assets/itemListPage/lockLight.png";
import close from "../../assets/itemListPage/close.png";
import { styled } from "styled-components";
import Profile from "../Common/Profile";
import { createReply } from "../../api/replies";

const CommentInput = ({
  postId,
  replying,
  setReplying,
  setRefresh,
  setIsModalVisible,
}) => {
  const [content, setContent] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  const [nickname, setNickname] = useState();

  //유저의 닉네임 조회
  useEffect(() => {
    async function getNickname() {
      try {
        const data = await getMyProfile();
        setNickname(data.nickname);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    getNickname();
  }, []);

  //댓글 작성
  const postComment = async () => {
    async function postData() {
      try {
        const data = await createComment(
          postId,
          {
            commentContent: content,
            isSecret: isSecret,
          },
          { headers: { "Content-Type": "application/json" } },
        );

        setRefresh(prev => prev + 1);
        setContent("");
        setIsSecret(false);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    content && postData();
  };

  //대댓글 작성
  const postReply = async () => {
    async function postData() {
      try {
        const data = await createReply(
          replying.originComment.postId,
          replying.originComment.commentId,
          {
            replyContent: "@" + replying.repliedComment.writer + " " + content,
            isSecret: isSecret,
          },
        );

        setRefresh(prev => prev + 1);
        setContent("");
        setReplying();
        setIsSecret(false);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    content && postData();
  };

  return (
    <Root>
      {replying && (
        <ReplyBar>
          <Profile
            nickname={replying.repliedComment.writer}
            width="30px"
            height="30px"
          />
          <ReplyText>{`@${replying.repliedComment.writer}님에게 답글 남기는 중`}</ReplyText>
          <CloseBtn src={close} onClick={() => setReplying()} />
        </ReplyBar>
      )}
      <Wrapper>
        <Profile nickname={nickname} width="30px" height="30px" />
        <Input
          placeholder="댓글 쓰기..."
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <Lock
          src={isSecret ? lockDark : lockLight}
          onClick={() => setIsSecret(prev => !prev)}
        />
        <SendBtn onClick={replying ? postReply : postComment}>
          <SendImg src={sendBtn} />
        </SendBtn>
      </Wrapper>
    </Root>
  );
};

export default CommentInput;

const Root = styled.div`
  width: 100%;
  position: fixed;
  bottom: 76px;
`;

const ReplyBar = styled.div`
  width: 100%;
  height: 45px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  padding: 0px 14px;
  box-sizing: border-box;
`;

const ReplyText = styled.div`
  margin-left: 12px;
  font-size: 14px;
  color: #9b9b9b;
`;

const CloseBtn = styled.img`
  margin-left: auto;
  width: 14px;
  &:focus {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 54px;
  width: 100%;
  padding: 0px 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-top: 0.5px solid #cecece;
  background: white;
`;

const Input = styled.input`
  margin-left: 14px;
  flex: 1;
  height: 90%;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b0b0b0;
  }
`;

const Lock = styled.img`
  margin-left: 14px;
  width: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const SendBtn = styled.div`
  margin-left: 14px;
  width: 28px;
  flex: none;
  &:hover {
    cursor: pointer;
  }
`;

const SendImg = styled.img`
  width: 100%;
`;
