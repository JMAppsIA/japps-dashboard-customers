import React from "react";
import { Button } from "./styled-components/Button";
import { Provider, useSelector } from 'react-redux';
import LoginPage from "./pages/login";


function App() {
  return (
    <div>
      <LoginPage/>
    </div>
  );
}

export default App;
