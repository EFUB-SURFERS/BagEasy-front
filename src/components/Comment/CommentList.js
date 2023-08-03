import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../../api/comments";
import CommentReplies from "./CommentReplies";
import CommentInput from "./CommentInput";
import CommentHeader from "./CommentHeader";
import { getMyProfile } from "../../api/member";

const CommentList = ({
  postId = 1,
  postWriter = "nickname",
  setIsModalVisible,
}) => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [nickname, setNickname] = useState("nickname");

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
    <Wrapper>
      <YellowWrapper>
        <CommentHeader comments={comments} />
        {comments.map((comment, key) => (
          <CommentReplies
            comment={comment}
            key={key}
            nickname={nickname}
            refresh={refresh}
            setRefresh={setRefresh}
            postWriter={postWriter}
            setIsModalVisible={setIsModalVisible}
          />
        ))}
      </YellowWrapper>
      <CommentInput
        postId={postId}
        setRefresh={setRefresh}
        setIsModalVisible={setIsModalVisible}
      />
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
`;

export default CommentList;
