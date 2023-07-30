import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../Common/Profile";
import dots from "../../assets/itemListPage/dots.png";
import CommentModal from "./CommentModal";

const Comment = ({ comment, isReply = false, setReplying }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Root isReply={isReply}>
        <ProfileWrapper>
          <Profile nickname={comment.writer} width="24px" height="24px" />
        </ProfileWrapper>

        <TextWrapper>
          <Nickname>{comment.writer}</Nickname>
          <Text>
            {!isReply ? comment.commentContent : comment.replyContent}
          </Text>
        </TextWrapper>

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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const Text = styled.div`
  font-size: 13px;
`;

const Button = styled.div`
  margin-left: auto;
  /* background: white; */
`;

const Dots = styled.img`
  width: 12px;
`;

export default Comment;
