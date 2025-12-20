import React from "react";
import AdminLayout from "../Component/AdminLayout";
import TitleParagraph from "../Component/TitleParagraph";
import { privacyPolicy } from "../data/userDashboard.json";
import { useSelector } from "react-redux";

const AdminPrivacyPolicy = () => {
  const role = useSelector((state) => state.person.value);
  return (
    <>
      <AdminLayout>
        <div className="mb-8 max-lg:mt-4">
          <h2 className="text-2xl sora-bold text-blue-900">Privacy Policy</h2>
          <p className="text-gray-600">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          {role == "admin" ? (
            <div
              id="edit-privacy&policy"
              className="flex items-center justify-end gap-4 mb-10"
            >
              <button className="lg:px-6 px-3 max-sm:text-sm py-2 bg-(--primary-color) text-white rounded-md">
                Create New Policy
              </button>
              <button className="sm:size-10 size-8 rounded-full text-white bg-[#37C6FB]">
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button className="sm:size-10 size-8 rounded-full text-white bg-[#37C6FB]">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ) : null}

          <div className="prose max-w-none">
            <TitleParagraph data={privacyPolicy} />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminPrivacyPolicy;
