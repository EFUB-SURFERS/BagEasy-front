import { styled } from "styled-components";
import Duck from "../assets/GoogleLogin/duck.png";
import Arrow from "../assets/GoogleLogin/arrow.png";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
      <Character src={Duck} />
      <P>이 페이지는 텅~ 비었어요.</P>
    </Container>
  );
};

export default Empty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 66px;
`;

const Character = styled.img`
  width: 272px;
  height: 215px;
  margin-top: 90px;
`;

const ArrowIcon = styled.img`
  width: 31px;
  height: 22px;
  margin-bottom: 40px;
  align-self: flex-start;
  margin-left: 20px;
  cursor: pointer;
`;

const P = styled.p`
  margin-top: 5.5rem;
  color: #767676;
  font-weight: 600;
  font-size: 1.2rem;
`;
