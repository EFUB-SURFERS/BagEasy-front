import React from "react";
import styled from "styled-components";

const SubMenuModal = ({ onEditClick, onDeleteClick }) => {
  return (
    <Div>
      <Menu onClick={onEditClick}>
        <p>수정하기</p>
      </Menu>
      <Menu onClick={onDeleteClick}>
        <p>삭제하기</p>
      </Menu>
    </Div>
  );
};
export default SubMenuModal;

const Div = styled.div`
  width: 80px;
  height: 61px;
  border: 1px solid #d9d9d9;
  background: #fff;

  position: fixed;
  bottom: 65px;
  right: 15px;
`;

const Menu = styled.div`
  /* width: 56px; */
  height: 50%;
  text-align: center;
  display: flex;
  height: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  p {
    color: #000000;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;

    &:hover {
      font-weight: 900;
    }
  }
`;
