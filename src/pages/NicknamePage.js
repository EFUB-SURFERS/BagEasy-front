import styled from "styled-components";
import Arrow from "../assets/GoogleLogin/arrow.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import axios from "axios";

const Nickname = () => {
  const [nickname, setNickName] = useState(""); // 닉네임 입력받기
  const [isOverlap, setIsOverlap] = useState(false); // 닉네임 중복 체크
  const [isFocused, setIsFocused] = useState(false); // focus 여부
  const [temp, setTemp] = useState(""); // 현재 입력값이 중복되는지 체크
  const [isExpired, setIsExpired] = useState(false);
  const inputRef = useRef(null); // focus 감지
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleNickName = e => {
    setNickName(e.target.value);
  };

  // focus 여부 감지
  useEffect(() => {
    const inputElement = inputRef.current;
    inputElement.addEventListener("focus", () => setIsFocused(true));
    inputElement.addEventListener("blur", () => setIsFocused(false));

    return () => {
      inputElement.removeEventListener("focus", () => setIsFocused(true));
      inputElement.removeEventListener("blur", () => setIsFocused(false));
    };
  }, []);

  const putNickName = async () => {
    const token = localStorage.getItem("bagtoken");
    try {
      const res = await axios.put(
        "https://server.bageasy.net/members/nickname",
        {
          nickname: nickname,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const PutNickName = async () => {
    if (nickname.length < 2) {
      setIsFocused(true);
    } else {
      try {
        const data = await putNickName();
        setIsOverlap(false);
        setIsFocused(false);
        setTemp("");
        navigate("/home");
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          // 토큰 만료
          setIsExpired(true);
        } else if (
          err.response &&
          err.response.data.code === "DUPLICATE_NICKNAME"
        ) {
          // 닉네임 중복
          setIsOverlap(true);
          setIsFocused(true);
          setTemp(nickname);
        }
      }
    }
  };

  return (
    <>
      {isExpired && <TokenRefreshModal />}
      <NickNameContainer>
        <ArrowIcon src={Arrow} onClick={handleNavigateBack} />
        <Copy>닉네임을 입력해주세요!</Copy>
        <Copy2>이후 닉네임 변경이 불가하니 신중하게 결정해주세요.</Copy2>
        <Container>
          <Input
            placeholder="여기에 입력하세요..."
            onChange={handleNickName}
            ref={inputRef}
            color={
              isFocused &&
              (nickname.length < 2 || (isOverlap && nickname === temp))
                ? "T"
                : "F"
            }
          />
          {isFocused && nickname.length < 2 && (
            <Copy3>- 닉네임을 2글자 이상 입력해주세요.</Copy3>
          )}
          {isFocused && isOverlap && nickname === temp && (
            <Copy3>- 중복되는 닉네임입니다.</Copy3>
          )}
        </Container>
        <Btn onClick={PutNickName}>확인</Btn>
      </NickNameContainer>
    </>
  );
};

const NickNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 66px;
`;

const Container = styled.div`
  height: 10rem;
  margin-bottom: 10rem;
`;

const ArrowIcon = styled.img`
  width: 31px;
  height: 22px;
  margin-bottom: 40px;
  align-self: flex-start;
  margin-left: 20px;
  cursor: pointer;
`;

const Copy = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 3px;
  align-self: flex-start;
  margin-left: 20px;
`;

const Copy2 = styled(Copy)`
  font-size: 12px;
  font-weight: 400;
`;

const Copy3 = styled(Copy2)`
  font-size: 12px;
  font-weight: 400;
  color: red;
`;

const Input = styled.input`
  width: 311px;
  height: 47px;
  border-radius: 23.5px;
  background: #efefef;
  border: ${props => (props.color === "T" ? "1px solid red" : "none")};
  padding-left: 15px;
  font-size: 15px;
  font-weight: 400;
  margin-top: 190px;
  outline: none;
`;

const Btn = styled.button`
  width: 327.073px;
  height: 46px;
  border-radius: 30px;
  background: linear-gradient(#ffc700 73.96%, rgba(255, 199, 0, 0.7) 100%);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 7rem;
`;

export default Nickname;
