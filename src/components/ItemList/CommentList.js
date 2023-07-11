import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import openArrow from "../../assets/openArrow.png";
import closeArrow from "../../assets/closeArrow.png";
import profileImg1 from "../../assets/profileImg1.png";

const CommentList = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <CommentWrapper open={open}>
        <Header>
          <Text>댓글</Text>
          <Count>2개</Count>
          <ArrowWrapper
            onClick={() => {
              setOpen(prev => !prev);
            }}
          >
            <Arrow src={open ? closeArrow : openArrow} />
          </ArrowWrapper>
        </Header>

        <List>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </List>
      </CommentWrapper>

      <Footer>
        <Profile>
          <ProfileImg src={profileImg1} />
        </Profile>
        <CommentInput placeholder="댓글 쓰기..." />
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
`;

const Header = styled.div`
  height: 1.2rem;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  /* border: 1px solid grey; */
`;

const Text = styled.div`
  padding-right: 0.5rem;
`;

const Count = styled.div`
  color: grey;
`;

const ArrowWrapper = styled.div`
  margin-left: auto;
  width: 1rem;
`;

const Arrow = styled.img`
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  /* border: 1px solid grey; */
  margin: 1rem;
  overflow: hidden;
  background: #ffee94;
  transition: all 2s;
  height: ${props => !props.open && `5.3rem`};
`;

const List = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  padding: 1rem;
`;

const Profile = styled.div`
  width: 1.4rem;
`;

const ProfileImg = styled.img`
  width: 100%;
`;

const CommentInput = styled.input`
  width: 100%;
  margin-left: 0.5rem;
  background: #eeeeee;
  height: 2.5rem;
  padding: 0rem 1rem;
  border-radius: 1rem;
  font-size: 14px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default CommentList;
