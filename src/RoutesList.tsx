import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Messages from "./Messages";
import Choose from "./Choose";
import LoginForm from "./LoginForm";
import SignUpFormControl from "./SignUpFormControl";
import HobbyForm from "./HobbyForm";
import InterestForm from "./InterestForm";

function RoutesList({ login, signUp }: {login: any, signUp: any}) {
  console.log("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignUpFormControl signUp={signUp}/>} />
    </Routes>
  )
}

export default RoutesList
