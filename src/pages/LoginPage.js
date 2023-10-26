import { styled } from "styled-components";
import kakao from "../assets/GoogleLogin/kakao.png";
import naver from "../assets/GoogleLogin/naver.png";
import google from "../assets/GoogleLogin/google.png";
import logo from "../assets/GoogleLogin/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=https://bageasy.net/loading&response_type=code&scope=email+profile`;
  };

  return (
    <SignUpContainer>
      <Logo src={logo} />
      <Copy>
        해외의 한인 교환학생에게 필요한 물품을 직접 구매하여 짐을 줄여보세요!
      </Copy>
      <BtnContainer>
        <GBtn src={google} onClick={handleLogin} />
        <Btn src={kakao} />
        <Btn src={naver} />
      </BtnContainer>
    </SignUpContainer>
  );
};

const Logo = styled.img`
  width: 262px;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 6rem;
`;

const Btn = styled.img`
  width: 328px;
  height: 46px;
  margin-bottom: 17px;
  cursor: pointer;
`;

const GBtn = styled(Btn)`
  height: 55px;
`;

const Copy = styled.h2`
  width: 167px;
  font-size: 15px;
  font-weight: 400;
  color: #444444;

  margin-top: 38.5px;

  text-align: center;
  line-height: 30px;
`;

export default Login;
