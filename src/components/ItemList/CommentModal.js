import React from "react";
import { styled } from "styled-components";

const CommentModal = ({ setIsOpen, setReplying, isMine, onDelete }) => {
  const onReply = () => {
    setIsOpen(false);
    setReplying(true);
  };

  return (
    <>
      <Background onClick={() => setIsOpen(false)}></Background>
      <Wrapper isMine={isMine}>
        {isMine && (
          <Text
            onClick={() => {
              onDelete();
              setIsOpen(false);
            }}
          >
            삭제
          </Text>
        )}
        <Text onClick={onReply}>답글달기</Text>
      </Wrapper>
    </>
  );
};

export default CommentModal;

const Background = styled.div`
  display: block;
  position: fixed;
  /* background: rgba(0, 0, 0, 0.3); */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 35px;
  margin-top: 3px;
  width: 63px;
  height: ${props => (props.isMine ? "48px" : "24px")};

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5ffcf;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  font-size: 11px;
`;

const Text = styled.div`
  flex: 1;
  width: 55px;
  text-align: center;
  padding-top: 5px;
  & + & {
    border-top: 1px solid #959595;
  }
`;
