import React from "react";
import styled from "styled-components";

const Toggle = ({ onToggle, filter }) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" id="toggle" onChange={onToggle} />
      <Label htmlFor="toggle" checked={filter} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* z-index: 0; */
  margin-left: auto;
`;

const CheckBox = styled.input`
  display: none;
`;

const Label = styled.label`
  //margin-left: 0.5rem;
  /* z-index: 1; */
  width: 80px;
  height: 26px;
  background: #e2e2e2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 10px;
  transition: all 0.1s ease-in-out;

  //디폴트 배경
  &::before {
    position: absolute;
    content: "전체";
    color: #8d8d8d;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding-top: 1px;
    padding-left: 12px;
    transition: all 0.1s ease-in-out;
  }
  //디폴트 원
  &::after {
    position: relative;
    display: block;
    content: "판매중";
    font-weight: bold;
    text-align: center;
    padding-top: 4px;
    padding-left: 1px;
    width: 40px;
    height: 21px;
    left: 37px;
    border-radius: 20px;
    background: white;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
  }

  ${props =>
    props.checked &&
    `
    //선택시 배경
    /* 배경색 변경 트랜지션 */
    transition: all 0.1s ease-in-out;
    /* 선택 O 배경 */
    &::before {
      position: absolute;
      content: "판매중";
      color: #8d8d8d;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      padding-top: 1px;
      padding-left: 44.5px;
      transition: all 0.1s ease-in-out;
    }
    //선택시 원
    &::after {
      position: relative;
      display: block;
      content: "전체";
      font-weight: bold;
      text-align: center;
      padding-top: 4px;
      padding-left: 1px;
      width: 40px;
      height: 21px;
      left: 2px;
      border-radius: 20px;
      background: white;
      box-sizing: border-box;
      transition: all 0.1s ease-in-out;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
    }`}
`;

export default Toggle;
