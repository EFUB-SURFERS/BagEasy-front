import { styled } from "styled-components";
import ModalBg from "../../assets/modal/modal_bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TokenRefreshModal = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  // 토큰 재발급
  const RefreshToken = async () => {
    const token = localStorage.getItem("bagtoken");
    try {
      const res = await axios.post("https://server.bageasy.net/auth/reissue", {
        headers: {
          Authorization: token,
        },
      });
      console.log(res);

      if (res.status == "200") {
        // 토큰이 성공적으로 발급된 경우
        localStorage.setItem("bagtoken", res.data.accessToken);
        localStorage.setItem("isExpired", "false");
        handleNavigateHome();
      }
      if (res.status == "401") {
        // refresh token도 만료된 경우 -> 다시 로그인 하도록
        localStorage.setItem("isExpired", "false");
        handleNavigateLogin();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <P>인증 토큰이 만료되었습니다. 다시 발급해주세요.</P>
      <Btn onClick={RefreshToken}>재발급</Btn>
      <Modal src={ModalBg} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 1vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const P = styled.p`
  position: absolute;
  margin-top: 4rem;
  margin-left: 2rem;
`;

const Btn = styled.button`
  position: absolute;
  margin-top: 8rem;
  margin-left: 9rem;
  width: 100px;
  height: 34px;
  border-radius: 30px;
  background-color: #ffc700;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 15px;
`;

const Modal = styled.img``;

export default TokenRefreshModal;
