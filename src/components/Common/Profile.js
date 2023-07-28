import styled from "styled-components";
import { useState } from "react";

const Profile = ({ nickname, width, height }) => {
  // 5가지 컬러 중에 배경 랜덤 생성
  const color_list = ["#F7C843", "#F76343", "#43CCF7", "#F74399", "#B343F7"];

  // 새로고침했을 때 배경 바뀌지 않게 로컬스토리지에 저장
  const getRandomChoice = () => {
    const storedChoice = localStorage.getItem(nickname);
    if (storedChoice && color_list.includes(storedChoice)) {
      return storedChoice;
    } else {
      const random_num = Math.floor(Math.random() * 5);
      const randomChoice = color_list[random_num];
      localStorage.setItem(nickname, randomChoice);
      return randomChoice;
    }
  };

  const [random_choice, setRandomChoice] = useState(getRandomChoice);

  return (
    <>
      <ProfileIcon color={random_choice} width={width} height={height}>
        {nickname[0]}
      </ProfileIcon>
    </>
  );
};

const ProfileIcon = styled.div`
  width: ${props => props.width || "36px"};
  height: ${props => props.height || "36px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1rem;
  color: white;
  background-color: ${props => props.color};
`;

export default Profile;
