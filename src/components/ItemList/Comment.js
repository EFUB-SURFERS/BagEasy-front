import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";
import dots from "../../assets/itemListPage/dots.png";
import CommentModal from "./CommentModal";
import lockGrey from "../../assets/itemListPage/lockGrey.png";

const Comment = ({ comment, isReply = false, setReplying, nickname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (comment.isSecret && comment.writer !== nickname) setHide(true);
  }, []);

  return (
    <Container>
      <Root isReply={isReply}>
        <ProfileWrapper>
          <Profile nickname={comment.writer} width="24px" height="24px" />
        </ProfileWrapper>

        <Wrapper>
          <Nickname>{comment.writer}</Nickname>
          <TextWrapper>
            {hide && (
              <LockWrapper>
                <Lock src={lockGrey} />
              </LockWrapper>
            )}
            <Text hide={hide}>
              {hide
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
          <CommentModal setIsOpen={setIsOpen} setReplying={setReplying} />
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
  margin-left: ${props => props.isReply && "50px"};
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
  color: ${props => (props.hide ? "#909090" : "black")};
`;

const Button = styled.div`
  margin-left: auto;
  /* background: white; */
`;

const Dots = styled.img`
  width: 12px;
`;

export default Comment;
