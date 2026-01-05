import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import toast from "react-hot-toast";
import axios from "axios";

const BasicPagination = ({ lastPage, url, setProducts }) => {
  const LoginToken = localStorage.getItem("LoginToken");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = async (event, page) => {
    setLoading(true);
    setCurrentPage(page);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/${url}?page_no=${page}`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );

      setProducts(response.data.products);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full h-15 w-15 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <Stack spacing={2}>
          <Pagination
            count={lastPage}
            onChange={handleChange}
            page={currentPage}
            color="primary"
          />
        </Stack>
      )}
    </>
  );
};

export default BasicPagination;
