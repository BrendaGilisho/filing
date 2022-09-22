import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import CaseCategories from "./components/CaseCaregories/CaseCategories";

export default function App() {
  return (
    <Router>
    < Navbar />
    <Routes>
      
        <Route path='/' element={<Home/>} />
        {/* <Route path='/CaseCategories' element={<CaseCategories/>} /> */}
        {/* <Route path='/Login' element={<LogIn/>} /> */}

        {/* <Route path='AllCourses' element={<AllCourses/>} />
        <Route path='Course' element={<Course/>} />
        <Route path='Dashboard' element={<Dashboard/>} />

        <Route path='JoinRoom' element={<JoinRoom/>} />
        <Route path='ChatRoom' element={<ChatRoom/>} />

        <Route path='EnrolledCourses' element={<EnrolledCourses/>} />
        <Route path='ContactUs' element={<ContactUs/>} /> */}


    </Routes>

    {/* < Footer /> */}

  </Router>
  );
}

