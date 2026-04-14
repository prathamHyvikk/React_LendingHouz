import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { termsAndConditions } from "../data/userDashboard.json";
import TitleParagraph from "../Component/TitleParagraph";
import { useSelector } from "react-redux";
import TextEditor from "../Component/TextEditor";
import axios from "axios";

const AdminTearmsAndConditions = () => {
  const role = useSelector((state) => state.person.value);
  const [showEditor, setShowEditor] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = useState(false);
  const LoginToken = useSelector((state) => state.auth.token);

  const getContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/settings`,
        {
          params: {
            name: "term_condition",
          },
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

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
        {showEditor && (
          <div className="fixed inset-0 bg-black/50 z-200  flex  items-center justify-center p-4"></div>
        )}
        <div className="mb-8 max-lg:mt-4 ">
          <h2 className="text-2xl sora-bold text-blue-900">
            Terms & Conditions
          </h2>
          <p className="text-gray-600">
            Please read these terms and conditions carefully
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          {showEditor ? (
            <div className="w-full relative z-201 ">
              <TextEditor
                content={content}
                setContent={setContent}
                setShowEditor={setShowEditor}
                heading={"Edit Term"}
                postName={"term_condition"}
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
                </div>
              ) : null}

              {/* <div className="prose max-w-none ">
                <TitleParagraph data={termsAndConditions} />
              </div> */}
              <div className="prose max-w-none htmlText ">
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

export default AdminTearmsAndConditions;
