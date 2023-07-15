import React from "react";
import { styled } from "styled-components";

//리스트 중 하나 클릭했을때 uni에 선택한 아이템의 스트링이 저장되고 모달이 닫히도록 함
//퍼블리싱 단계에서는 첫번째 아이템에서만 작동
//모달 밖을 선택했을때도 모달이 닫힘
//uni, isOpen등 변수명은 바꾸셔도 됩니다.

const Modal = ({ isOpen, setIsOpen, uni, setUni }) => {
  const handleUniChange = e => {
    setUni(e.target.value);
  };

  const handleItemClick = selectedUni => {
    setUni(selectedUni);
    setIsOpen(false);
  };

  return (
    <>
      <Layer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Layer>
      <Container>
        <p>학교명을 입력해주세요!</p>
        <Input>
          <input
            placeholder="영문으로 입력해주세요."
            value={uni}
            onChange={handleUniChange}
          />
        </Input>
        <List>
          <Item onClick={() => handleItemClick("이화여자대학교")}>
            이화여자대학교
          </Item>
          <Item>이화여자대학교</Item>
          <Item>이화여자대학교</Item>
          <Item>이화여자대학교</Item>
          <Item>이화여자대학교</Item>
        </List>
      </Container>
    </>
  );
};

export default Modal;
const Layer = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
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
