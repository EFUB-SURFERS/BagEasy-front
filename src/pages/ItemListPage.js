import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";
import { getAllPosts, getPostBySchool } from "../api/posts";

const ItemListPage = () => {
  const [filter, setFilter] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [uniDisplay, setUniDisplay] = useState("");

  const navigate = useNavigate();
  const onToggle = () => {
    setFilter(prev => !prev);
  };

  useEffect(() => {
    async function fetchData() {
      const data = uniDisplay
        ? await getPostBySchool(uniDisplay)
        : await getAllPosts();
      setLoading(false);
      setPosts(data);
    }
    fetchData();
  }, [refresh]);

  return (
    <Wrapper>
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar
        onToggle={onToggle}
        filter={filter}
        uniDisplay={uniDisplay}
        setUniDisplay={setUniDisplay}
        setRefresh={setRefresh}
      />
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <List posts={posts} setRefresh={setRefresh} offset="138px" />
      )}
      <WriteBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ItemListPage;
