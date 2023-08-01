import loading from "../assets/Loading/loadingIcon.gif";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Loading = () => {
  const navigate = useNavigate();
  const [isExistingMember, setIsExistingMember] = useState(false);

  const handleHome = () => {
    navigate("/home");
  };

  const handleNickName = () => {
    navigate("/nickname");
  };

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const handleLoginPost = async code => {
    const data = {
      code: code,
    };
    return await axios
      .post("https://server.bageasy.net/auth/login", data)
      .then(res => localStorage.setItem("bagtoken", res.data.accessToken))
      .then(() => navigate("/home"));

    // localStorage.setItem("myNickname", res.data.nickname);

    // setIsExistingMember(res.data.isExistingMember);
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
      // .then(() =>
      //   isExistingMember ? handleHome() : handleNickName(),
      // );
      console.log(isExistingMember);
    } else {
      console.log("로그인 재시도하세요.");
    }
  }, [code, navigate]);

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
