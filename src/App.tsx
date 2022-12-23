import './App.css';
import { BrowserRouter } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import FrienderApi from './api';
import { useEffect, useState } from 'react';
import userInfoContext from './userInfoContext';

function App() {

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [currUser, setCurrUser] = useState(null);

  console.log("App", token, currUser);

  useEffect(() => {
    console.log("USING EFFECT")
    async function getUser() {
      const payload = jwt_decode(token);
      console.log("THIS IS THE PAYLOAD: ", payload);
      const { id }:{ id: number } = jwt_decode(token);
      FrienderApi.token = token;
      const userResult = await FrienderApi.getUser(id);
      setCurrUser(userResult);
      localStorage.setItem("token", token);
    }
    if (token) {
      getUser();
    } else {
      setCurrUser(null);
    }
  }, [token]);

  async function login(loginData) {
    console.log("THIS IS LOGIN DATA", loginData);
    const tokenResult = await FrienderApi.login(loginData);
    setToken(tokenResult);
    // localStorage.setItem("token", tokenResult);
  }

  async function signUp(signUpData) {
    console.log("THIS IS SIGNUP DATA", signUpData);
    const tokenResult = await FrienderApi.signUp(signUpData);
    setToken(tokenResult);
  }

  async function updateUserInfo(userInfoData) {
    console.log("THIS IS UPDATE USER INFO DATA", userInfoData);
    const userInfo = await FrienderApi.editUserInfo(currUser.id, userInfoData);
    setCurrUser(u => ({
      ...u,
      ...userInfo
    }));
  }

  async function updateHobbies(updatedHobbies) {
    console.log('UPDATE HOBBIES', updatedHobbies);
    const userHobbies = await FrienderApi.editHobbies(currUser.id, updatedHobbies);
    setCurrUser(u => ({
      ...u,
      hobbies: userHobbies
    }))
  }
  function userLogout() {
    console.log("LOGOUT");
    localStorage.removeItem("token");
    setCurrUser(null);
    setToken(null);
  }

  if (token && !currUser) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="App">
      <userInfoContext.Provider value={currUser}>
        <BrowserRouter>
          <NavBar userLogout={userLogout}/>
          <RoutesList
            login={login}
            signUp={signUp}
            updateUserInfo={updateUserInfo}
            updateHobbies={updateHobbies}
          />
        </BrowserRouter>
      </userInfoContext.Provider>
    </div>
  );
}

export default App;
