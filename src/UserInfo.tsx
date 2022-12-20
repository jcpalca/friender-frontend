import React from "react";
import { useNavigate } from "react-router-dom";

function UserInfo({currUser}) {

    const navigate = useNavigate();

    function editUser() {
        navigate('/edit/user')
    }
    return (
        <div>
            <h3>{currUser.firstName} {currUser.lastName}</h3>
            <p>Zip: {currUser.zip}</p>
            <button onClick={editUser}>Edit</button>
        </div>
    )
}

export default UserInfo;