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
  z-index: 0;
`;

const CheckBox = styled.input`
  display: none;
`;

const Label = styled.label`
  margin-left: 0.5rem;
  z-index: 1;
  width: 6rem;
  height: 2rem;
  background: #eeeeee;
  border-radius: 2rem;

  //디폴트 배경
  &::before {
    position: absolute;
    content: "전체";
    color: #aaaaaa;
    width: 3rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    top: 0.3rem;
    padding-left: 0.9rem;
    transition: all 0.1s ease-in-out;
  }
  //디폴트 원
  &::after {
    position: relative;
    content: "판매중";
    font-weight: bold;
    font-size: 12px;
    padding-left: 0.4rem;
    padding-top: 0.26rem;
    display: block;
    width: 3rem;
    height: 1.6rem;
    top: 0.2rem;
    left: 2.8rem;
    border-radius: 2rem;
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
        color: #aaaaaa;
        width: 3rem;
        height: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
        top: 0.3rem;
        padding-left: 3.35rem;
        transition: all 0.1s ease-in-out;
    }
    //선택시 원
    &::after {
        position: relative;
        content: "전체";
        font-weight: bold;
        font-size: 12px;
        padding-left: 0.7rem;
        padding-top: 0.26rem;
        display: block;
        width: 3rem;
        height: 1.6rem;
        top: 0.2rem;
        left: 0.2rem;
        border-radius: 2rem;
        background: white;
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
    }`}
`;

export default Toggle;
