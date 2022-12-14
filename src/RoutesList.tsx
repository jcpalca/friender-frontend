import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Messages from "./Messages";
import Choose from "./Choose";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import HobbyForm from "./HobbyForm";
import InterestForm from "./InterestForm";
import AddPhotoForm from "./AddPhotoForm";
import UserInfoForm from "./UserInfoForm";
import Profile from "./Profile";

function RoutesList(
  {
    login,
    signUp,
    updateUserInfo,
    updateHobbies,
    updateInterests }:{
      login: any,
      signUp: any,
      updateUserInfo: any,
      updateHobbies: any,
      updateInterests: any,
    }) {
  console.log("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit/user" element={<UserInfoForm updateUserInfo={updateUserInfo}/>} />
      <Route path="/edit/pictures" element={<AddPhotoForm />} />
      <Route path="/edit/hobbies" element={<HobbyForm updateHobbies={updateHobbies}/>} />
      <Route path="/edit/interests" element={<InterestForm updateInterests={updateInterests}/>} />

      {/* <Route path="/hobby" element={<HobbyForm />} />
      <Route path="/interest" element={<InterestForm />} /> */}
    </Routes>
  )
}

export default RoutesList
