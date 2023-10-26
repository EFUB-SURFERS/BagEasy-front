import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";
import lockDark from "../../assets/itemListPage/lockDark.png";
import lockLight from "../../assets/itemListPage/lockLight.png";
import { deleteReply } from "../../api/replies";
import { deleteComment } from "../../api/comments";

const Comment = ({
  comment,
  isReply = false,
  originComment,
  setReplying,
  nickname,
  setRefresh,
  postWriter,
  commentWriter,
  setIsModalVisible,
}) => {
  const [hide, setHide] = useState(false);

  //비밀댓글 숨김여부 설정
  useEffect(() => {
    comment.isSecret &&
      nickname !== comment.writer &&
      nickname !== postWriter &&
      nickname !== commentWriter &&
      setHide(true);
  }, []);

  //댓글,대댓글 삭제
  const onDelete = async () => {
    try {
      isReply
        ? await deleteReply(comment.replyId)
        : await deleteComment(comment.commentId);
      setRefresh(prev => prev + 1);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  return (
    <Container>
      <Root $isReply={isReply}>
        <ProfileWrapper>
          <Profile nickname={comment.writer} width="30px" height="30px" />
        </ProfileWrapper>

        <MainWrapper>
          <Wrapper>
            <Nickname>{comment.writer}</Nickname>
            <Day>2시간</Day>
          </Wrapper>
          <TextWrapper>
            {comment.isSecret && (
              <LockWrapper>
                <Lock src={hide ? lockLight : lockDark} />
              </LockWrapper>
            )}
            <Text $hide={hide}>
              {hide
                ? "비밀 댓글입니다."
                : !isReply
                ? comment.commentContent
                : comment.replyContent}
            </Text>
          </TextWrapper>
          <ButtonWrapper>
            <Button
              onClick={() =>
                isReply
                  ? setReplying({
                      originComment: originComment,
                      repliedComment: comment,
                    })
                  : setReplying({
                      originComment: comment,
                      repliedComment: comment,
                    })
              }
            >
              답글달기
            </Button>
            {nickname === comment.writer && (
              <>
                <Bar>|</Bar>
                <Button onClick={onDelete}>삭제하기</Button>
              </>
            )}
          </ButtonWrapper>
        </MainWrapper>
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
  margin: 0 15px;
  padding: 8px 0;
  margin-left: ${props => props.$isReply && "50px"};
  box-sizing: border-box;
`;

const ProfileWrapper = styled.div`
  padding-top: 3px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const Day = styled.div`
  font-size: 10px;
  color: #848484;
  margin-left: 10px;
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
  font-size: 11px;
  color: ${props => (props.$hide ? "#909090" : "black")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: #848484;
  font-size: 10px;
`;

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.div`
  padding: 0px 3px;
`;

export default Comment;
