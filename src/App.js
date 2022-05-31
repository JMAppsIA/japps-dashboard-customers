import React from "react";
import { Provider, useSelector } from "react-redux";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path="login" element={<SignIn/>}/>
            <Route path="register" element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
