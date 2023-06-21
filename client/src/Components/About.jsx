import React, { useEffect, useState } from "react";
import ProfileExp from "./ProfileExp";

const About = ({ useremail }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [toggle, setToggle] = useState(true);
  const [formfirst, setFirstName] = useState("");
  const [formlast, setLastName] = useState("");
  const [formaddress, setAddress] = useState("");
  const [formphone, setPhone] = useState("");
  const [formDOB, setDOB] = useState("");
  const [formgender, setGender] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formdata = {
      first_name: formfirst,
      last_name: formlast,
      address: formaddress,
      phone: formphone,
      DOB: formDOB,
      gender: formgender,
    };
  
    fetch(`http://127.0.0.1:5000/users/${useremail}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Update the user data in the state
        handleToggle();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/users/${useremail}`
        );
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getUser();
  }, [useremail]);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return (
      <div>
        Failed to get data. Please try refreshing. Error: {error.message}
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>Failed to get data please try refreshing {error.message}</div>;
  }
  return (
    <div>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{user.first_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{user.last_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{user.gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">{user.phone}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">{user.address}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanant Address</div>
              <div className="px-4 py-2">{user.address}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">
                  {user.email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">{user.DOB}</div>
            </div>
          </div>
        </div>
        {toggle ? (
          <button
            onClick={handleToggle}
            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
          >
            Update Information
          </button>
        ) : (
          <div className="grid grid-cols-2">
            <button
              onClick={handleToggle}
              className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Cancel
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(e);
              }}
            >
              <button
                type="submit"
                className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
              >
                Save Changes
              </button>
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Gender"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact No."
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="text  "
                placeholder="Current Address"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Birthday"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full rounded"
                onChange={(e) => setDOB(e.target.value)}
              />
            </form>
          </div>
        )}
        <ProfileExp education={user.educations} skill={user.skills} />
      </div>
    </div>
  );
};

export default About;
