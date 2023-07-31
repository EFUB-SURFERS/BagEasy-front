import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";
import {
  getAllPosts,
  getPostBySchool,
  getPostonSales,
  getpostsBySchoolOnSales,
} from "../api/posts";

const ItemListPage = () => {
  const [onSales, setOnSales] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [uniDisplay, setUniDisplay] = useState("");

  const navigate = useNavigate();
  const onToggle = () => {
    setOnSales(prev => !prev);
  };

  //글 조회
  useEffect(() => {
    async function fetchData() {
      if (onSales) {
        const data = uniDisplay
          ? await getpostsBySchoolOnSales(uniDisplay)
          : await getPostonSales();
        setPosts(data);
      } else {
        const data = uniDisplay
          ? await getPostBySchool(uniDisplay)
          : await getAllPosts();
        setPosts(data);
      }
      setLoading(false);
    }
    fetchData();
  }, [refresh, onSales]);

  return (
    <Wrapper>
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar
        onToggle={onToggle}
        onSales={onSales}
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
