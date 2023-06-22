import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-3/12 md:mx-2ma">
          <div className="bg-white p-3 border-t-4 border-green-400">
            test
            <div className="image overflow-hidden">
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0L9 3H3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H15L12 0Z"
                    fill="none"
                  />
                  <path
                    className="heroicon-ui"
                    d="M12 0L9 3H3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H15L12 0ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About Us</span>
            </div>
            <p className="text-gray-700">
              We are a group of students from the University of Washington
              Coding Bootcamp. We are currently working on our final project
              which is a full stack application. We are using React, Node,
              Express, MongoDB, and GraphQL. We are also using Tailwind CSS for
              styling.
            </p>
            
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-3">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 13H7v5h5v2H5V10h2v1h5v2zm7-7h-5V6h5v5zm0 7h-5v5h5v-5zm-7-7H7V6h5v5z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Our Team</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556742048-3f5c7c0ba8f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
                  }}
                >
                  <button className="p-2 rounded-full bg-gray-800 text-white mx-5 -mb-4 hover:bg-gray-700 focus:bg-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
