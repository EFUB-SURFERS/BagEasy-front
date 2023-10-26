import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../api/comments";
import CommentReplies from "./CommentReplies";
import CommentInput from "./CommentInput";
import CommentHeader from "./CommentHeader";
import { getMyProfile } from "../../api/member";
import Character from "./Character";

const CommentList = ({
  postId = 1,
  postWriter = "nickname",
  setIsModalVisible,
}) => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [nickname, setNickname] = useState("nickname");
  const [replying, setReplying] = useState(); //대댓글 작성시 필요한 정보{OriginComment, RepliedComment}

  //댓글 조회
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getComments(postId);
        setComments(data);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    fetchData();
  }, [refresh]);

  //닉네임 조회
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMyProfile();
        data && setNickname(data.nickname);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <Root>
      <CommentHeader comments={comments} />
      <Wrapper $replying={!!replying}>
        {comments.map((comment, key) => (
          <CommentReplies
            comment={comment}
            key={key}
            nickname={nickname}
            setReplying={setReplying}
            refresh={refresh}
            setRefresh={setRefresh}
            postWriter={postWriter}
            setIsModalVisible={setIsModalVisible}
          />
        ))}
        {comments.length === 0 && <Character />}
      </Wrapper>
      <CommentInput
        postId={postId}
        replying={replying}
        setReplying={setReplying}
        setRefresh={setRefresh}
        setIsModalVisible={setIsModalVisible}
      />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

const Wrapper = styled.div`
  margin-bottom: ${props => (props.$replying ? "175px" : "130px")};
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
`;

export default CommentList;
