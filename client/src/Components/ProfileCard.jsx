import React from "react";

const ProfileCard = ({ user }) => {

  console.log(user)

  return (
    <div>
      <div className="bg-white p-3 border-t-4 border-green-400">
        <div className="image overflow-hidden">
          <img className="h-auto w-full mx-auto" src={user.picture} alt="" />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {user.name}
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          {user.email_verified ? "Account Verified 🌟 " : "Not Verified"}
        </h3>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Status</span>
            <span className="ml-auto">
              <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Active
              </span>
            </span>
          </li>
          <li className="flex items-center py-3">
            <span>Member since</span>
            <span className="ml-auto">Nov 07, 2016</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileCard;
