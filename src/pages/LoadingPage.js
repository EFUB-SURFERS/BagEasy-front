import loading from "../assets/Loading/loadingIcon.gif";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Loading = () => {
  const navigate = useNavigate();
  let accessToken = "";
  let isExistingMember = false;

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
    try {
      const res = await axios.post(
        "https://server.bageasy.net/auth/login",
        data,
      );
      if (res.status == "200") {
        // 토큰 localstorage에 저장
        accessToken = res.data.accessToken;
        isExistingMember = res.data.isExistingMember;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log("로그인 재시도하세요.");
    }
  }, [code]);

  useEffect(() => {
    localStorage.setItem("bagtoken", accessToken);
  }, [accessToken]);

  useEffect(() => {
    isExistingMember ? handleHome() : handleNickName();
  }, [isExistingMember]);

  return (
    <LoadingConatiner>
      <LoadingIcon src={loading} />
      <H2>로그인중입니다...</H2>
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
