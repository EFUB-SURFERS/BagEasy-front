import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import openArrow from "../../assets/itemListPage/openArrow.png";
import closeArrow from "../../assets/itemListPage/closeArrow.png";
import sendBtn from "../../assets/itemListPage/sendBtn.png";

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
  height: 20px;
  display: flex;
  align-items: center;
  padding: 4px 13px;
  /* border: 1px solid grey; */
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

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  /* border: 1px solid grey; */
  /* margin: 1rem; */
  box-sizing: border-box;
  padding-bottom: 5px;
  margin: 46px 23px 48px 23px;
  width: 344px;
  overflow: hidden;
  background: #ffee94;
  /* transition: all 0.3s; */
  height: ${props => (!props.open ? "95px" : "auto")};
`;

const List = styled.div``;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cecece;
  padding-top: 15px;
  padding-bottom: 75px;
  //background: black;
`;

const CommentInput = styled.input`
  //width: 18rem;
  flex: auto;
  background: #efefef;
  height: 39px;
  padding: 0 10.99px;
  margin: 0 15px 0 20px;
  border-radius: 1rem;
  font-size: 14px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b0b0b0;
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
