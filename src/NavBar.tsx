import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userInfoContext from './userInfoContext';


function NavBar({userLogout}) {
  console.log("NavBar");

  const currUser = useContext(userInfoContext);

  return (
    <nav className="Navigation">
      <div className="Navigation-left">
        <NavLink className="Navigation-Link-Jobly" to='/'>
          Friender
        </NavLink>
      </div>

      {
        !currUser
          ? <div className="Navigation-right">
              <NavLink className="Navigation-Link-Signup" to='/signup'>
                Signup
              </NavLink>
              <NavLink className="Navigation-Link-Login" to='/login'>
                Login
              </NavLink>
            </div>

          : <div className="Navigation-right">
              <NavLink className="Navigation-Link-Companies" to='/messages'>
                Messages
              </NavLink>
              <NavLink className="Navigation-Link-Jobs" to='/choose'>
                Choose
              </NavLink>
              <NavLink className="Navigation-Link-Profile" to='/profile'>
                Profile
              </NavLink>
              <NavLink className="Navigation-Link-Logout" to='/' onClick={userLogout}>
                Logout {currUser.firstName}
              </NavLink>
            </div>
      }
    </nav>
  )
}

export default NavBar
