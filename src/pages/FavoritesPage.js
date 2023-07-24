import React, { useEffect, useState } from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import Header from "./../components/Common/Header";
import { getLikes } from "../api/likes";

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLikes();

      setLoading(false);
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <List posts={posts} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FavoritesPage;
