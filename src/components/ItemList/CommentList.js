import React, { useEffect, useState } from "react";
import styled from "styled-components";
import openArrow from "../../assets/itemListPage/openArrow.png";
import closeArrow from "../../assets/itemListPage/closeArrow.png";
import { getComments } from "../../api/comments";
import CommentReplies from "./CommentReplies";
import CommentInput from "./CommentInput";

const CommentList = ({ postId = 1 }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(0);

  //댓글 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getComments(postId);
      setComments(data);
    }
    fetchData();
  }, [refresh]);

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
      <CommentInput postId={postId} setRefresh={setRefresh} />
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

const CommentWrapper = styled.div`
  width: 90%;
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

const List = styled.div``;

export default CommentList;
