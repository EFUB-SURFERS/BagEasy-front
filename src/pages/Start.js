import React from "react";
import styled from "styled-components";
import start from "../assets/StartPage/start.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <StartScreenContainer>
      <Button onClick={() => navigate("/login")}>시작하기</Button>
      <BG src={start} />
    </StartScreenContainer>
  );
};

const BG = styled.img`
  height: 100vh;
`;

const StartScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #0e312b;
`;

const Button = styled.button`
  justify-content: center;
  padding: 10px 20px;
  width: 327px;
  font-size: 20px;
  background-color: white;
  font-weight: bolder;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  bottom: 6rem;
`;

export default Start;
