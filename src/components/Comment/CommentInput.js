import React, { useState } from "react";
import { createComment } from "../../api/comments";
import { getMyProfile } from "../../api/member";
import sendBtn from "../../assets/itemListPage/sendBtn.png";
import lockLightgrey from "../../assets/itemListPage/lockLightgrey.png";
import lockGreen from "../../assets/itemListPage/lockGreen.png";
import { styled } from "styled-components";

const CommentInput = ({ postId, setRefresh, setIsModalVisible }) => {
  const [comment, setComment] = useState("");
  const [isSecret, setIsSecret] = useState(false);

  //댓글 작성
  const postComment = async () => {
    async function postData() {
      try {
        const data = await createComment(
          postId,
          {
            commentContent: comment,
            isSecret: isSecret,
          },
          { headers: { "Content-Type": "application/json" } },
        );

        setRefresh(prev => prev + 1);
        setComment("");
        setIsSecret(false);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    comment && postData();
  };

  return (
    <Wrapper>
      <Input
        placeholder="댓글 쓰기..."
        value={comment}
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <Lock
        src={isSecret ? lockGreen : lockLightgrey}
        onClick={() => setIsSecret(prev => !prev)}
      />
      <SendBtn onClick={postComment}>
        <SendImg src={sendBtn} />
      </SendBtn>
    </Wrapper>
  );
};

export default CommentInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cecece;
  padding-top: 15px;
  padding-bottom: 92px;
  position: relative;
`;

const Input = styled.input`
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

const Lock = styled.img`
  position: absolute;
  width: 12px;
  right: 77px;
  &:hover {
    cursor: pointer;
  }
`;

const SendBtn = styled.div`
  width: 1.8rem;
  margin-right: 20px;
  flex: none;
  &:hover {
    cursor: pointer;
  }
`;

const SendImg = styled.img`
  width: 100%;
`;
