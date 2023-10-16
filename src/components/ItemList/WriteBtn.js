import React from "react";
import styled from "styled-components";
import plus from "../../assets/itemListPage/plus.png";
import { useNavigate } from "react-router-dom";

const WriteBtn = () => {
  const navigate = useNavigate();
  const goToCreateSalesPage = () => {
    navigate("/create");
  };
  return (
    <Wrapper onClick={goToCreateSalesPage}>
      <Img src={plus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: #0e312b;
  box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 20px;
`;

export default WriteBtn;
