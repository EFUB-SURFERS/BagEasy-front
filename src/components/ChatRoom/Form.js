import React from "react";
import { styled } from "styled-components";
import gallery from "../../assets/gallery.png";
const Form = () => {
  return (
    <div>
      <Line />
      <Wrapper>
        <ImgBtn>
          <img src={gallery} />
        </ImgBtn>
        <Text>
          <input placeholder="메세지를 입력하세요."></input>
        </Text>
        <SubmitBtn>전송</SubmitBtn>
      </Wrapper>
    </div>
  );
};

export default Form;
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: center;
  background: #ffffff;
`;
const Line = styled.div`
  position: fixed;
  bottom: 90px;
  width: 100%;
  height: 1px;
  background: #c9c9c9;
`;
const Text = styled.div`
  margin: 25px 0px 0px 7px;
  width: 280px;
  height: 42px;
  border-radius: 100px;
  background: #efefef;
  display: flex;
  input {
    outline: none;
    margin: 11.5px 12px 11.5px 12px;
    width: 100%;
    border: none;
    background: #efefef;
    height: 19px;
    color: #656565;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ImgBtn = styled.button`
  width: 32px;
  height: 32px;
  margin: 30px 0px 0px 8px;
  border: none;
  background: #ffffff;
  padding: 0;
  img {
    width: 32px;
    height: 32px;
  }
`;
const SubmitBtn = styled.button`
  margin: 25px 9px 0px 9px;
  width: 42px;
  height: 42px;
  background: #ffc701;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
