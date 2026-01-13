import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import TitleParagraph from "../Component/TitleParagraph";
import { privacyPolicy } from "../data/userDashboard.json";
import { useSelector } from "react-redux";
import axios from "axios";

const PrivacyPolicy = () => {
  const role = useSelector((state) => state.person.value);
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = useState(false);
  const LoginToken = localStorage.getItem("LoginToken");

  const getContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/settings`,
        {
          params: {
            name: "privacy_policy",
          },
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );

      console.log(response);
      setContent(response?.data);
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContent();
  }, []);
  return (
    <>
      <AdminLayout>
        <div className="mb-8 ">
          <h2 className="text-2xl sora-bold text-blue-900">Privacy Policy</h2>
          <p className="text-gray-600">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          {loading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-gray-900"></div>
            </div>
          )}
          <div className="prose max-w-none htmlText ">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default PrivacyPolicy;
