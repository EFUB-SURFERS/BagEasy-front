import axios from "axios";

// 닉네임 PUT 요청, 응답 코드로 중복 체크
export const PutNickName = async ({
  setIsOverlap,
  handleNavigateHome,
  nickname,
}) => {
  try {
    const res = await axios.put("http://localhost:8080/members/nickname", {
      nickname: nickname,
    });
    console.log(res);
    if (res.status === "400") {
      setIsOverlap(true);
    }
    if (res.status === "200") {
      setIsOverlap(false);
      handleNavigateHome();
    }
  } catch (error) {
    console.log(error);
  }
};
