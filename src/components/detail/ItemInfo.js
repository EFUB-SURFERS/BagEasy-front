import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getDetail } from "../../api/posts";
import { getMyProfile } from "../../api/member";
import { getLikes } from "../../api/likes";

import Comment from "../ItemList/Comment";
import CommentList from "../ItemList/CommentList";
import ItemContent from "./ItemContent";
import Footer from "./Footer";

const ItemInfo = ({ postId }) => {
  const [post, setPost] = useState("");
  const [myId, setMyId] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    fetchPostData();
    userData();
    heartData();
  }, []);

  const fetchPostData = async () => {
    try {
      const getData = await getDetail(postId);
      setPost(getData);
      // console.log("getData", getData);
    } catch (err) {
      console.log("error", err);
    }
  };

  const userData = async () => {
    try {
      const getData = await getMyProfile();
      setMyId(getData);
      // console.log("getData", getData);
    } catch (err) {
      console.log("error", err);
    }
  };

  const heartData = async () => {
    try {
      const heartData = await getLikes(postId);
      setLikes(heartData);
    } catch (err) {
      console.log("error", err);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Div>
      <ItemContent
        sellerNickname={post.sellerNickname}
        school={post.school}
        postTitle={post.postTitle}
        postContent={post.postContent}
        imageResponseDtos={post.imageResponseDtos}
      />
      <CommentList />
      {/* <Comment /> */}
      <Footer
        isLiked={likes.isLiked}
        heartCount={post.heartCount}
        postId={post.postId}
        sellerId={post.sellerId}
        price={post.price}
        isSold={post.isSold}
        myId={myId.memberId}
        myNickname={myId.nickname}
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
