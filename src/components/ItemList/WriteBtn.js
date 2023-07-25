import React from "react";
import styled from "styled-components";
import postImg from "../../assets/itemListPage/postImg.png";
import { useNavigate } from "react-router-dom";

const WriteBtn = () => {
  const navigate = useNavigate();
  const goToCreateSalesPage = () => {
    navigate("/create");
  };
  return (
    <Wrapper onClick={goToCreateSalesPage}>
      <Img src={postImg} />
      <Text>글쓰기</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  background: #ffc700;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
`;

const Img = styled.img`
  width: 20px;
`;

const Text = styled.div`
  color: white;
  font-weight: bold;
  margin-left: 7px;
`;

export default WriteBtn;
