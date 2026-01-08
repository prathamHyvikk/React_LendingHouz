import React from "react";

import AdminLayout from "../Component/AdminLayout";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meg",
      name: "Meg Griffin",
      message:
        "has left you a review. Both of your reviews from this trip are now public.",
      date: "March 1, 2023",
    },
    {
      id: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cleveland",
      name: "Cleveland Brown",
      message:
        "has left you a review. Both of your reviews from this trip are now public.",
      date: "February 26, 2023",
    },
    {
      id: 3,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Glenn",
      name: "Glenn",
      message:
        "accepted your invite to co-host Cheerful 2-bedroom home in the heart of Quahog",
      date: "April 25, 2022",
    },
    {
      id: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Glenn2",
      name: "Glenn",
      message:
        "accepted your invite to co-host Cozy 3BR home minutes from downtown Quahog",
      date: "March 6, 2022",
    },
  ];
  return (
    <>
      <AdminLayout>
        <div className="bg-white rounded-lg pb-8 shadow-sm">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl sora-semibold text-gray-800">
              Notification
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>Filter</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div id="notifications-container" className="">
            {notifications.map((notification, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 hover:bg-gray-50 transition-colors relative group"
              >
                <img
                  src={notification.avatar}
                  alt={notification.name}
                  className="w-10 h-10 rounded-full shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <p className="text-gray-800">
                    <span className="sora-medium">{notification.name}</span>
                    <span className="text-gray-600 text-sm">
                      {notification.message}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {notification.date}
                  </p>
                </div>

                <button className="p-1 text-gray-600 hover:text-gray-800 opacity-100 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
      
        </div>
      </AdminLayout>
    </>
  );
};

export default Notifications;
