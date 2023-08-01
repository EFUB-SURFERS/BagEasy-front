import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";
import dots from "../../assets/itemListPage/dots.png";
import CommentModal from "./CommentModal";
import lockGrey from "../../assets/itemListPage/lockGrey.png";
import { deleteReply } from "../../api/replies";
import { deleteComment } from "../../api/comments";

const Comment = ({
  comment,
  isReply = false,
  setReplying,
  nickname,
  setRefresh,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  //댓글,대댓글 삭제
  const onDelete = async () => {
    async function deleteData() {
      isReply
        ? await deleteReply(comment.replyId)
        : await deleteComment(comment.commentId);
      setRefresh(prev => prev + 1);
    }
    deleteData();
    //window.location.reload();
  };

  return (
    <Container>
      <Root $isReply={isReply}>
        <ProfileWrapper>
          <Profile nickname={comment.writer} width="24px" height="24px" />
        </ProfileWrapper>

        <Wrapper>
          <Nickname>{comment.writer}</Nickname>
          <TextWrapper>
            {comment.isSecret && (
              <LockWrapper>
                <Lock src={lockGrey} />
              </LockWrapper>
            )}
            <Text $hide={comment.isSecret && comment.writer !== nickname}>
              {comment.isSecret && comment.writer !== nickname
                ? "비밀 댓글입니다."
                : !isReply
                ? comment.commentContent
                : comment.replyContent}
            </Text>
          </TextWrapper>
        </Wrapper>

        <Button onClick={() => setIsOpen(true)}>
          <Dots src={dots} />
        </Button>
        {isOpen && (
          <CommentModal
            setIsOpen={setIsOpen}
            setReplying={setReplying}
            isMine={nickname === comment.writer}
            onDelete={onDelete}
          />
        )}
      </Root>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Root = styled.div`
  display: flex;
  background: #ffee94;
  margin: 0 15px;
  padding: 8px 0;
  margin-left: ${props => props.$isReply && "50px"};
  box-sizing: border-box;
`;

const ProfileWrapper = styled.div`
  padding-top: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LockWrapper = styled.div`
  width: 9px;
  margin-right: 3px;
`;

const Lock = styled.img`
  width: 100%;
`;

const Text = styled.div`
  flex: 1;
  font-size: 13px;
  color: ${props => (props.$hide ? "#909090" : "black")};
`;

const Button = styled.div`
  margin-left: auto;
  /* background: white; */
`;

const Dots = styled.img`
  width: 12px;
`;

export default Comment;
