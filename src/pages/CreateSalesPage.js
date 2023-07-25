import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
