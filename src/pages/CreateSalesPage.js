import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createPost } from "../api/posts";
import Modal from "../components/UpdateUni/Modal";
import Header from "../components/CreateSales/Header";
import SalesContent from "../components/CreateSales/SalesContent";

const CreateSalesPage = () => {
  const { postId } = useParams();
  return (
    <div>
      <SalesContent postId={postId} />
    </div>
  );
};

export default CreateSalesPage;
