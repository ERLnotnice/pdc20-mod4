import React,  {useState}from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Forms from "./Forms";
import './styles.css';



function UserProfile() {
    // Initialize the state for User data
    const [userData, setUserData] = useState({
        name: 'Juan Dea Cruz',
        email: 'juan@gmail.com',
        username: 'JuanDels07'
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState)=>({
            ...prevState,
            ...updatedInfo,
        }));
    };


    return (
        <div className="container"> {/* Add a container class for styling */}
            <Navigation />
            <Profile user={userData} />
            <Forms user={userData} onUpdate={handleUpdate}/>
        </div>
    );
}


    export default UserProfile;