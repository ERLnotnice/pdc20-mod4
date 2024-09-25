import React from "react";
import propTypes from "prop-types";


function Profile({user: {name,email,username}}){

    return(
        <div className="profile">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
        </div>
    );
}

Profile.propTypes = {
    user: propTypes.shape({
        name: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        username: propTypes.string.isRequired,
    })
}

export default Profile;