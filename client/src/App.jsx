import React from 'react';
import NavBarPlus from './Components/NavBarPlus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountPage from './Pages/AccountPage';
import HomePage from './Pages/HomePage';
import Timesheet from './Pages/TimeSheet';
import AboutUs from './Pages/AboutUs';
import SignUp from './Pages/SignUp';


function App() {

  return (
<BrowserRouter>
      <NavBarPlus />
      <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="MyAccount" element={<AccountPage/>} />
          <Route path="TimeSheet" element={<Timesheet/>}  />
          <Route path="AboutUs"  element={<AboutUs/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
  </BrowserRouter>  
  );
}

export default App;
