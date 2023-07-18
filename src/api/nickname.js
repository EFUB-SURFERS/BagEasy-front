import axios from "axios";
import { useNavigate } from "react-router-dom";

// 닉네임 PUT 요청, 응답 코드로 중복 체크
export const PutNickName = async ({
  setIsOverlap,
  handleNavigateHome,
  nickname,
}) => {
  const token = localStorage.getItem("bagtoken");
  const navigate = useNavigate();
 
  try {
    const res = await axios.put("https://server.bageasy.net/members/nickname", {
      nickname: nickname,
    }, {
      headers: {
        Authorization: token,
      },
    });
    console.log(res);
    if (res.status == "400") {
      setIsOverlap(true);
    }
    if (res.status == "200") {
      setIsOverlap(false);
      navigate("/home");
    }
  } catch (error) {
    console.log(error);
  }
};
