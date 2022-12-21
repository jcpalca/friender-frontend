import React, { useContext } from "react";
import userInfoContext from './userInfoContext';
// import Pictures from "./Pictures";
import UserInfo from "./UserInfo";
import Hobbies from "./Hobbies";
// import Interests from "./Interests";


function Profile() {
    const currUser = useContext(userInfoContext);

    function getLinks() {
        // await method to get Image Links
    }

    return (
        <div>
            {/* <Pictures /> */}
            <UserInfo currUser={currUser}/>
            <Hobbies hobbies={currUser.hobbies}/>
            {/* <Interests interests={currUser.interests}/> */}
        </div>
    )
}

export default Profile;
