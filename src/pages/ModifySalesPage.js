import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../api/posts";
import SalesContent from "../components/ModifySales/SalesContent";

const ModifySalesPage = () => {
  const { postId } = useParams();

  const [data, setData] = useState("");

  const fetchPostData = async () => {
    try {
      const getData = await getDetail(postId);
      setData(getData);
      // console.log(post);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  return (
    <div>
      <SalesContent originalData={data} />
    </div>
  );
};

export default ModifySalesPage;
