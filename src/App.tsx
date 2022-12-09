import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";

function App() {
  console.log("App");

  function login() {
    return "";
  }

  function signUp() {
    return "";
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
