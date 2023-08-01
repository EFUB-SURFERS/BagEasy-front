import React, { useEffect, useState } from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import Header from "./../components/Common/Header";
import { getLikedPosts } from "../api/likes";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [isExpired, setIsExpired] = useState(localStorage.getItem("isExpired"));

  //찜한 양도글 리스트 조회
  useEffect(() => {
    async function fetchData() {
      const data = await getLikedPosts();

      //토큰 만료시
      if (data.response && data.response.data.code === "EXPIRED_TOKEN") {
        localStorage.setItem("isExpired", true);
        setIsExpired(localStorage.getItem("isExpired"));
      } else {
        setLoading(false);
        setPosts(data);
      }
    }

    fetchData();
  }, [refresh]);

  return (
    <Wrapper>
      {isExpired === "true" && <TokenRefreshModal />}
      <Header />
      <List posts={posts} setRefresh={setRefresh} liked={true} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

export default FavoritesPage;
