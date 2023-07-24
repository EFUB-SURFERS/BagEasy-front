import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";
import { getAllPosts } from "../api/posts";

const ItemListPage = () => {
  const [filter, setFilter] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const onToggle = () => {
    setFilter(prev => !prev);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPosts();

      setLoading(false);
      setPosts(data);
    }
    fetchData();
  }, []);
  return (
    <Wrapper>
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar onToggle={onToggle} filter={filter} />
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <List posts={posts} margintop="180px" marginbottom="70px" />
      )}
      <WriteBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ItemListPage;
