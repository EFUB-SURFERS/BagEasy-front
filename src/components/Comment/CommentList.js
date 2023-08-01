import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../api/comments";
import CommentReplies from "./CommentReplies";
import CommentInput from "./CommentInput";
import CommentHeader from "./CommentHeader";
import { getMyProfile } from "../../api/member";
import TokenRefreshModal from "../Common/TokenRefreshModal";

const CommentList = ({ postId = 1 }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [nickname, setNickname] = useState("nickname");
  const [isExpired, setIsExpired] = useState(localStorage.getItem("isExpired"));

  //댓글 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getComments(postId);

      //토큰 만료시
      if (data.response && data.response.data.code === "EXPIRED_TOKEN") {
        localStorage.setItem("isExpired", true);
        setIsExpired(localStorage.getItem("isExpired"));
      } else {
        setComments(data);
      }
    }
    fetchData();
  }, [refresh]);

  //닉네임 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getMyProfile();

      //토큰 만료시
      if (data.response && data.response.data.code === "EXPIRED_TOKEN") {
        localStorage.setItem("isExpired", true);
        setIsExpired(localStorage.getItem("isExpired"));
      } else {
        data && setNickname(data.nickname);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      {isExpired === "true" && <TokenRefreshModal />}
      <YellowWrapper $open={open}>
        <CommentHeader comments={comments} open={open} setOpen={setOpen} />
        {comments.map((comment, key) => (
          <CommentReplies
            comment={comment}
            key={key}
            nickname={nickname}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </YellowWrapper>
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

const YellowWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding-bottom: 5px;
  margin: 46px 23px 48px 23px;
  overflow: hidden;
  background: #ffee94;
  height: ${props => (!props.$open ? "90px" : "auto")};
`;

const List = styled.div``;

export default CommentList;
