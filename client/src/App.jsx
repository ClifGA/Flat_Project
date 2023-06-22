import React from 'react';
import NavBarPlus from './Components/NavBarPlus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountPage from './Pages/AccountPage';
import HomePage from './Pages/HomePage';
import Timesheet from './Pages/TimeSheet';
import AboutUs from './Pages/AboutUs';
import SignUp from './Pages/SignUp';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Careers from './Pages/Careers';


function App() {
  const { user, isAuthenticated } = useAuth0();
  const [currentuser, setCurrentUser] = useState();
  const [error, setError] = useState(null);


  useEffect(() => {
    if (isAuthenticated) {
      fetch(`http://127.0.0.1:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data);
          
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [isAuthenticated]);

  return (
<BrowserRouter>
      <NavBarPlus />
      <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="MyAccount" element={<AccountPage currentProfileUser={currentuser} />} />
          <Route path="TimeSheet" element={<Timesheet currentTimesheetUser={currentuser}/>}  />
          <Route path="AboutUs"  element={<AboutUs/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Careers" element={<Careers/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
  </BrowserRouter>  
  );
}

export default App;
