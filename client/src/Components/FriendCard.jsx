import React from "react";

const FriendCard = () => {
  return (
    <div className="bg-white p-3 hover:shadow">
      <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
        <span className="text-green-500">
          <svg
            className="h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>
        <span>Team Members</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="text-center my-2">
          <img
            className="h-16 w-16 rounded-full mx-auto"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <a href="#" className="text-main-color">
            Tom
          </a>
        </div>
        <div className="text-center my-2" />
        <div className="text-center my-2">
          <button className="h-16 w-16 rounded-full mx-auto">
            <img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png" alt="" />
           add memeber</button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
