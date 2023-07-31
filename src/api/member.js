import client from "./client";

//멤버 조회 api
export const getProfile = async memberId => {
  try {
    const res = await client.get(`members/${memberId}`);

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 본인 프로필 조회
export const getMyProfile = async () => {
  try {
    const res = await client.get(`members/me`);
    //console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//학교 변경
export const putSchool = async school => {
  try {
    const res = await client.put(`members/school`, {
      school: school,
    });

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
