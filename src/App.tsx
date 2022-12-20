import './App.css';
import { BrowserRouter } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import FrienderApi from './api';
import { useEffect, useState } from 'react';

function App() {

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [currUser, setCurrUser] = useState(null);

  console.log("App", token, currUser);

  useEffect(() => {
    console.log("USING EFFECT")
    async function getUser() {
      const { id }:{ id: number } = jwt_decode(token);
      FrienderApi.token = token;
      const userResult = await FrienderApi.getUser(id);
      setCurrUser(userResult);
    }
    if (token) {
      getUser();
    } else {
      setCurrUser(null);
    }
  }, [token]);

  function login() {
    return "";
  }

  async function signUp(signUpData) {
    console.log("THIS IS SIGNUP DATA", signUpData);
    const tokenResult = await FrienderApi.signUp(signUpData);
    setToken(tokenResult);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList login={login} signUp={signUp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
