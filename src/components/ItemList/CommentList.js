import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import openArrow from "../../assets/openArrow.png";
import closeArrow from "../../assets/closeArrow.png";
import sendBtn from "../../assets/sendBtn.png";

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
        <CommentInput placeholder="댓글 쓰기..." />
        <SendBtn>
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
  /* border-top: 1px solid lightgrey; */
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
  /* margin: 1rem; */
  margin: 46px 23px 48px 23px;
  width: 344px;
  overflow: hidden;
  background: #ffee94;
  transition: all 2s;
  height: ${props => !props.open && `6.1rem`};
`;

const List = styled.div``;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgrey;
  padding-top: 15px;
  padding-bottom: 75px;
  //background: black;
`;

const CommentInput = styled.input`
  //width: 18rem;
  flex: auto;
  background: #dddddd;
  height: 2.5rem;
  padding: 0 10.99px;
  margin: 0 15px 0 20px;
  border-radius: 1rem;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
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
