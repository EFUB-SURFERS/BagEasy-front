import React from "react";
import styled from "styled-components";

const Toggle = ({ onToggle, onSales }) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" id="toggle" onChange={onToggle} />
      <Label htmlFor="toggle" checked={!onSales} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const CheckBox = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 80px;
  height: 26px;
  border-radius: 20px;
  font-size: 10px;
  transition: all 0.1s ease-in-out;
  background: white;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.15);

  //디폴트 배경
  &::before {
    content: "전체";
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #8d8d8d;
    padding-top: 1px;
    padding-left: 12px;
    transition: all 0.1s ease-in-out;
  }
  //디폴트 원
  &::after {
    content: "판매중";
    position: relative;
    display: block;
    text-align: center;
    width: 38px;
    height: 19px;
    padding-top: 3px;
    padding-left: 1px;
    left: 38px;
    border-radius: 20px;
    color: white;
    background: #ffc700;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  }

  ${props =>
    props.checked &&
    `
    //선택시 배경
    /* 배경색 변경 트랜지션 */
    transition: all 0.1s ease-in-out;
    /* 선택 O 배경 */
    &::before {
      content: "판매중";
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #8d8d8d;
      padding-top: 1px;
      padding-left: 44px;
      transition: all 0.1s ease-in-out;
    }
    //선택시 원
    &::after {
      content: "전체";
      position: relative;
      display: block;
      text-align: center;
      width: 38px;
      height: 19px;
      padding-top: 3px;
      padding-left: 1px;
      left: 4px;
      border-radius: 20px;
      color: white;
      background: #ffc700;
      box-sizing: border-box;
      transition: all 0.1s ease-in-out;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    }`}
`;

export default Toggle;
