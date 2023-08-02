import styled from "styled-components";

const Profile = ({ nickname, width, height }) => {
  // 5가지 컬러 중에 배경 랜덤 생성
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  function getRandomColorFromHash(hash) {
    const color_list = ["#F7C843", "#F76343", "#43CCF7", "#F74399", "#B343F7"];
    const index = Math.abs(hash) % color_list.length;
    return color_list[index];
  }

  const hash = nickname && hashCode(nickname);
  const color = getRandomColorFromHash(hash);

  return (
    <>
      <ProfileIcon color={color} width={width} height={height}>
        {nickname ? nickname[0] : null}
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
  font-size: ${props => `${parseInt(props.width) / 2.5}px`};
  color: white;
  background-color: ${props => props.color};
`;

export default Profile;
