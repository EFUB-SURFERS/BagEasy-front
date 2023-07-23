import React, { useState } from "react";
import { createPost } from "../api/posts";
import Modal from "../components/UpdateUni/Modal";
import Header from "../components/CreateSales/Header";
import SalesContent from "../components/CreateSales/SalesContent";

const CreateSalesPage = () => {
  return (
    <div>
      <SalesContent />
    </div>
  );
};

export default CreateSalesPage;
