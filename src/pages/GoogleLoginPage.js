import { styled } from "styled-components";
import Duck from "../assets/duck.png";
import Arrow from "../assets/arrow.png";
import GoogleBtn from "../assets/googleBtn.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";

const GoogleLogin = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  // 로그인 post 요청
  const handleLoginPost = async () => {
    const data = {
      code: token,
    };
    try {
      const res = await axios.post("http://localhost:8080/auth/login", data);
      console.log(res);
      if (res.status === "200") {
        // 토큰 localstorage에 저장
        const accessToken = res.data.accessToken;
        console.log(accessToken);
        localStorage.setItem("bagtoken", accessToken);

        // 신규/기존 회원 여부에 따라 다른 주소로 Redirect
        res.data.isExistingMember ? navigate("/home") : navigate("/nickname");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setToken(tokenResponse.access_token); // access token 저장
      handleLoginPost();
    },
    flow: "implicit",
  });

  return (
    <SignUpContainer>
      <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
      <Copy>안녕하세요</Copy>
      <Copy>구글 계정이 있나요?</Copy>
      <Character src={Duck} />
      <GBtn src={GoogleBtn} onClick={() => login()} />
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
