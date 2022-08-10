import React, { useState } from 'react';
import {
  BrowserRouter as Routes,

  Route
} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';



import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;