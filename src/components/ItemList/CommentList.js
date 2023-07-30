import React, { useEffect, useState } from "react";
import styled from "styled-components";
import openArrow from "../../assets/itemListPage/openArrow.png";
import closeArrow from "../../assets/itemListPage/closeArrow.png";
import sendBtn from "../../assets/itemListPage/sendBtn.png";
import { getComments, createComment } from "../../api/comments";
import { getMyProfile } from "../../api/member";
import CommentReplies from "./CommentReplies";

const CommentList = ({ postId = 1 }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [refresh, setRefresh] = useState(0);

  //댓글 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getComments(postId);
      setComments(data);
    }
    fetchData();
  }, [refresh]);

  //댓글 작성
  const postComment = () => {
    async function postData() {
      const memberId = await getMyProfile(1).memberId;
      const data = await createComment(
        postId,
        {
          memberId: memberId,
          commentContent: comment,
          isSecret: false,
        },
        { headers: { "Content-Type": "application/json" } },
      );

      setRefresh(prev => prev + 1);
      setComment("");
    }
    comment && postData();
  };

  return (
    <Wrapper>
      <CommentWrapper open={open}>
        <Header>
          <Text>댓글</Text>
          <Count>{`${comments.length}개`}</Count>
          <ArrowWrapper
            onClick={() => {
              setOpen(prev => !prev);
            }}
          >
            <Arrow src={open ? closeArrow : openArrow} />
          </ArrowWrapper>
        </Header>

        <List>
          {comments.map((comment, key) => (
            <CommentReplies comment={comment} key={key} />
          ))}
        </List>
      </CommentWrapper>

      <Footer>
        <CommentInput
          placeholder="댓글 쓰기..."
          value={comment}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        <SendBtn onClick={postComment}>
          <SendImg src={sendBtn} />
        </SendBtn>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;

const Header = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 4px 13px;
`;

const Text = styled.div`
  padding-right: 5px;
`;

const Count = styled.div`
  color: #848484;
  font-size: 12px;
`;

const ArrowWrapper = styled.div`
  margin-left: auto;
  margin-top: 2px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.img`
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding-bottom: 5px;
  margin: 46px 23px 48px 23px;
  overflow: hidden;
  background: #ffee94;
  height: ${props => (!props.open ? "90px" : "auto")};
`;

const List = styled.div``;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cecece;
  padding-top: 15px;
  padding-bottom: 75px;
`;

const CommentInput = styled.input`
  flex: auto;
  background: #efefef;
  height: 39px;
  padding: 0 10.99px;
  margin: 0 15px 0 20px;
  border-radius: 1rem;
  font-size: 14px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b0b0b0;
  }
`;

const SendBtn = styled.div`
  width: 1.8rem;
  margin-right: 20px;
  flex: none;
`;

const SendImg = styled.img`
  width: 100%;
`;

export default CommentList;
