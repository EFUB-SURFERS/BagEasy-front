import loading from "../assets/Loading/loadingIcon.gif";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  console.log(code);

  const handleLoginPost = async code => {
    const data = {
      code: code,
    };
    try {
      const res = await axios.post(
        "https://server.bageasy.net/auth/login",
        data,
      );
      console.log(res);
      if (res.status == "200") {
        // 토큰 localstorage에 저장
        const accessToken = res.data.accessToken;
        console.log(accessToken);
        localStorage.setItem("bagtoken", accessToken);
        localStorage.setItem("myNickname", res.data.nickname);
        // 신규/기존 회원 여부에 따라 다른 주소로 Redirect
        res.data.isExistingMember ? navigate("/home") : navigate("/nickname");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (code) {
    handleLoginPost(code);
  } else {
    console.log("로그인 재시도하세요.");
  }

  return (
    <LoadingConatiner>
      <LoadingIcon src={loading} />
      <H2> 로그인중입니다...</H2>
    </LoadingConatiner>
  );
};

const LoadingConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15rem;
`;

const H2 = styled.h2`
  font-weight: 500;
  margin-top: 0;
  font-size: 1.2rem;
`;

const LoadingIcon = styled.img``;

export default Loading;
