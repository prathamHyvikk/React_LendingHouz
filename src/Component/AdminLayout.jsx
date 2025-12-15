import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50 sora">
        <div className="flex h-screen relative">
          <Sidebar />

          <div className="content-area flex-1 overflow-auto lg:ml-0 pt-16 lg:pt-0">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
