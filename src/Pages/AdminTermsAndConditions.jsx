import React from "react";
import AdminLayout from "../Component/AdminLayout";
import { termsAndConditions } from "../data/userDashboard.json";
import TitleParagraph from "../Component/TitleParagraph";
import { useSelector } from "react-redux";

const AdminTearmsAndConditions = () => {
  const role = useSelector((state) => state.person.value);
  return (
    <>
      <AdminLayout>
        <div className="mb-8 max-lg:mt-4 ">
          <h2 className="text-2xl sora-bold text-blue-900">
            Terms & Conditions
          </h2>
          <p className="text-gray-600">
            Please read these terms and conditions carefully
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          {role == "admin" ? (
            <div
              id="edit-terms&conditions"
              className="flex items-center justify-end gap-4 mb-10"
            >
              <button className="sm:px-6 px-3 max-sm:text-sm py-2 bg-(--primary-color) text-white rounded-md">
                Create New Terms
              </button>
              <button className="sm:size-10 size-8 rounded-full text-white bg-[#37C6FB]">
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button className="sm:size-10 size-8 rounded-full text-white bg-[#37C6FB]">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ) : null}

          <div className="prose max-w-none ">
            <TitleParagraph data={termsAndConditions} />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminTearmsAndConditions;
