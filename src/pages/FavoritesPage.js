import React, { useEffect, useState } from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import Header from "./../components/Common/Header";
import { getLikedPosts } from "../api/likes";

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getLikedPosts();

      setLoading(false);
      setPosts(data);
    }
    fetchData();
  }, [refresh]);

  return (
    <Wrapper>
      <Header />
      <List posts={posts} setRefresh={setRefresh} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

export default FavoritesPage;
