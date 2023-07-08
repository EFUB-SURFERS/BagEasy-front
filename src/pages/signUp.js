import { styled } from "styled-components";
import Duck from "../images/duck.png";
import Arrow from "../images/arrow.png";
import GoogleBtn from "../images/googleBtn.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleNavigateGoogle = () => {
    navigate("/nickname");
  };

  return (
    <SignUpContainer>
      <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
      <Copy>안녕하세요</Copy>
      <Copy>구글 계정이 있나요?</Copy>
      <Character src={Duck} />
      <GBtn src={GoogleBtn} onClick={handleNavigateGoogle} />
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
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

const GBtn = styled.img`
  width: 328px;
  height: 46px;
  margin-top: 200px;
  cursor: pointer;
`;

const Copy = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 3px;
  align-self: flex-start;
  margin-left: 20px;
`;

export default SignUp;
