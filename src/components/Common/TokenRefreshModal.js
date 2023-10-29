import { styled } from "styled-components";
import ModalBg from "../../assets/modal/modalBg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TokenRefreshModal = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("bagtoken");

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  // 토큰 재발급
  const RefreshToken = async () => {
    try {
      const res = await axios.post(
        "https://server.bageasy.net/auth/reissue",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res);

      if (res.status == 200) {
        // 토큰이 성공적으로 발급된 경우
        localStorage.setItem("bagtoken", res.data.accessToken);
        handleNavigateHome();
        window.location.reload();
      }
      if (res.status == 401) {
        // refresh token도 만료된 경우 -> 다시 로그인 하도록
        localStorage.clear();
        handleNavigateLogin();
        window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 스크롤 막음
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트되면 스크롤 허용
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Container>
        <P>인증 토큰이 만료되었습니다. 다시 발급해주세요.</P>
        <Btn onClick={RefreshToken}>재발급</Btn>
        <Modal src={ModalBg} />
      </Container>
      <Bg />
    </>
  );
};

const Bg = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const P = styled.p`
  font-size: 14px;
  position: absolute;
  margin-top: 3rem;
  margin-left: 3rem;
`;

const Btn = styled.button`
  position: absolute;
  margin-top: 7.5rem;
  margin-left: 8.5rem;
  width: 100px;
  height: 34px;
  border-radius: 30px;
  background-color: #0e312b;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 15px;
`;

const Modal = styled.img`
  width: 374px;
`;

export default TokenRefreshModal;
