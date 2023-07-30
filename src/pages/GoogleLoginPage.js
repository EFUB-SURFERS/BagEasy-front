import { styled } from "styled-components";
import Duck from "../assets/GoogleLogin/duck.png";
import Arrow from "../assets/arrow.png";
import GoogleBtn from "../assets/GoogleLogin/googleBtn.png";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=https://bageasy.vercel.app/loading&response_type=code&scope=email profile`;
  };

  return (
    <SignUpContainer>
      <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
      <Copy>안녕하세요</Copy>
      <Copy>구글 계정이 있나요?</Copy>
      <Character src={Duck} />
      <GBtn src={GoogleBtn} onClick={handleLogin} />
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

export default GoogleLogin;
