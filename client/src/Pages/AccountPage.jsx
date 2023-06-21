import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "../Components/ProfileCard";
import FriendCard from "../Components/FriendCard";
import About from "../Components/About";

const AccountPage = () => {
  const { user } = useAuth0();
  if (user === undefined) {
    return (
      <div>
        <h1 className="text-center text-3xl mt-10 text-gray-700">
          Must be Logged in to view your account page.
        </h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-3/12 md:mx-2ma">
          <ProfileCard user={user} />
          <div class="my-4"></div>
          <FriendCard />
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
          <About useremail={user.email} />
          <div class="my-4"></div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
