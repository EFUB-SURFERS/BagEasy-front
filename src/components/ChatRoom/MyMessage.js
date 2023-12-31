import React from "react";
import { styled } from "styled-components";

const MyMessage = ({ content, sendTime, sendDate, type, readCount }) => {
  return (
    <>
      {sendDate.isNewDate && <Date>{sendDate.date}</Date>}
      <Wrapper>
        <Time>
          {readCount === 1 && <div className="count">{readCount}</div>}
          {sendTime}
        </Time>

        {type === 1 ? (
          <ImageContainer>
            <img src={content} alt="" />
          </ImageContainer>
        ) : (
          <Text>{content}</Text>
        )}
      </Wrapper>
    </>
  );
};

export default MyMessage;
const Date = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  color: #6d6d6d;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageContainer = styled.div`
  margin-left: 7px;
  margin-right: 12px;

  img {
    max-width: 235px;
    border-radius: 10px;
    max-height: 150px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
`;
const Time = styled.div`
  align-self: flex-end;
  color: #848484;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  .count {
    display: flex;
    justify-content: end;
    font-size: 10px;
    color: #50115a;
  }
`;
const Text = styled.div`
  max-width: 235px;
  border-radius: 25.997px 0px 25.997px 25.997px;
  background: #ffee94;
  padding: 8.07px 18px 8.07px 18px;
  margin-left: 7px;
  margin-right: 12px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
