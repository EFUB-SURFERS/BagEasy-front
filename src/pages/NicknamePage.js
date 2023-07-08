import styled from "styled-components";
import Arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const Nickname = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleNavigateHome = () => {
    navigate("/home");
  };

  return (
    <NickNameContainer>
      <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
      <Copy>닉네임을 입력해주세요!</Copy>
      <Input placeholder="여기에 입력하세요..." />
      <Btn onClick={handleNavigateHome}>확인</Btn>
    </NickNameContainer>
  );
};

const NickNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 66px;
`;

const ArrowIcon = styled.img`
  width: 31px;
  height: 22px;
  margin-bottom: 40px;
  align-self: flex-start;
  margin-left: 20px;
  cursor: pointer;
`;

const Copy = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 3px;
  align-self: flex-start;
  margin-left: 20px;
`;

const Input = styled.input`
  width: 311px;
  height: 47px;
  border-radius: 23.5px;
  background: #efefef;
  border: none;
  padding-left: 15px;
  font-size: 15px;
  font-weight: 400;
  margin-top: 240px;
  margin-bottom: 250px;
  outline: none;
`;

const Btn = styled.button`
  width: 327.073px;
  height: 46px;
  border-radius: 30px;
  background: linear-gradient(#ffc700 73.96%, rgba(255, 199, 0, 0.7) 100%);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default Nickname;
