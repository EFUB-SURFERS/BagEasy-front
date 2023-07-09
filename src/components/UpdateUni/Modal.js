import React from "react";
import { styled } from "styled-components";
const Modal = ({ isOpen, setIsOpen, uni, setUni }) => {
  return (
    <Container>
      <p>학교명을 입력해주세요!</p>
      <Input>
        <input
          placeholder="영문으로 입력해주세요."
          value={uni}
          onChange={e => {
            setUni(e.target.value);
          }}
        />
      </Input>
      <List>
        <Item
          onClick={() => {
            setUni("이화여자대학교");
            setIsOpen(!isOpen);
          }}
        >
          이화여자대학교
        </Item>
        <Item>이화여자대학교</Item>
        <Item>이화여자대학교</Item>
        <Item>이화여자대학교</Item>
        <Item>이화여자대학교</Item>
      </List>
    </Container>
  );
};

export default Modal;

const List = styled.div`
  margin-top: 16px;
  margin-left: 28px;
  overflow: auto;
`;
const Item = styled.div`
  margin-bottom: 16px;

  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Container = styled.div`
  width: 314px;
  height: 248px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin: 30px 0px 0px 32px;
    color: #eeba00;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

const Input = styled.div`
  align-self: center;
  margin-top: 19px;
  width: 288px;
  height: 37px;
  background: #f5f5f5;
  display: flex;
  align-items: center;

  input {
    width: 90%;
    background: #f5f5f5;
    border: none;
    outline: none;
    margin-left: 14px;
    color: #000;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
