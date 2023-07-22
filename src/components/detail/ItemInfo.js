import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getDetail } from "../../api/posts";

import Comment from "../ItemList/Comment";
import CommentList from "../ItemList/CommentList";
import ItemContent from "./ItemContent";
import Footer from "./Footer";

const ItemInfo = () => {
  // const [post, setPost] = useState(null); // 판매글 데이터를 저장할 상태 변수

  const post = {
    postId: 7,
    sellerNickname: "sws",
    postTitle: "test",
    postContent: "쌉니다",
    price: 600,
    isSold: false,
    school: "이화여자대학교",
    buyerNickname: "efub",
    createdAt: "2023-07-15T00:01:51.817582",
    modifiedAt: "2023-07-15T00:01:51.817582",
    imageResponseDtos: [
      {
        imageId: 9,
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/bageasy/post/image/d953fdec-b85f-4ce9-b7f5-7ac5576b8e05.jpg",
        postId: 7,
      },
      {
        imageId: 9,
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/bageasy/post/image/d953fdec-b85f-4ce9-b7f5-7ac5576b8e05.jpg",
        postId: 7,
      },
      {
        imageId: 9,
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/bageasy/post/image/d953fdec-b85f-4ce9-b7f5-7ac5576b8e05.jpg",
        postId: 7,
      },
    ],
  };
  // useEffect(() => {
  //   // 판매글 데이터를 받아오는 함수 호출
  //   fetchPostData();
  // }, []);

  // const fetchPostData = async () => {
  //   try {
  //     const postId = 1;
  //     const postData = await getDetail(postId);
  //     setPost(postData);
  //     console.log(postData);
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };

  // const deleteData = async () => {
  //   try {
  //     const postId = 1;
  //     const postData = await getDetail(postId);
  //     setPost(postData);
  //     console.log(postData);
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };

  // if (!post) {
  //   console.log(getDetail);
  //   return <div>Loading...</div>;
  // }

  return (
    <Div>
      <ItemContent
        sellerId={post.sellerNickname}
        postTitle={post.postTitle}
        postContent={post.postContent}
        imageResponseDtos={post.imageResponseDtos}
      />
      <CommentList />
      <Comment />
      <Footer
        postId={post.postId}
        sellerId={post.sellerId}
        price={post.price}
        isSold={post.isSold}
      />
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 68px;
`;
