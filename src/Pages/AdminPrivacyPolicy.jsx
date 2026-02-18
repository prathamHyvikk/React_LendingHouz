import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { termsAndConditions } from "../data/userDashboard.json";
import TitleParagraph from "../Component/TitleParagraph";
import { useSelector } from "react-redux";
import TextEditor from "../Component/TextEditor";
import axios from "axios";

const AdminPrivacyPolicy = () => {
  const role = useSelector((state) => state.person.value);
  const [showEditor, setShowEditor] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [loading , setLoading] = useState(false);
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

      setContent(response?.data);
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response.data.message);
      }
    }finally{
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   postContent();
  // }, []);

  useEffect(() => {
    getContent();
  }, []);
  return (
    <>
      {showEditor && (
        <div className="fixed inset-0 bg-black/50 z-200  flex  items-center justify-center p-4"></div>
      )}
      <AdminLayout>
        <div className="mb-8 max-lg:mt-4 ">
          <h2 className="text-2xl sora-bold text-blue-900">Privacy Policy</h2>
          <p className="text-gray-600">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          {showEditor ? (
            <div className="w-full relative z-201 ">
              <TextEditor
                content={content}
                setContent={setContent}
                setShowEditor={setShowEditor}
                postName="privacy_policy"
                heading={"Edit Privacy Policy"}
              />
            </div>
          ) : (
            <>
              {role == "admin" ? (
                <div
                  id="edit-terms&conditions"
                  className="flex items-center justify-end gap-6 mb-10"
                >
                  <div onClick={() => setShowEditor(true)}>
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="#155dfc"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </div>

                  {/* <div>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="#4a5565"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </div> */}

                  {/* <div>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="#e7000b"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </div> */}
                </div>
              ) : null}

              {/* <div className="prose max-w-none ">
                <TitleParagraph data={termsAndConditions} />
              </div> */}
              <div className="prose max-w-none htmlText">
                {loading && (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-gray-900"></div>
                  </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </>
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminPrivacyPolicy;
