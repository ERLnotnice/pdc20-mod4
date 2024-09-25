import React, {useState }from "react";

function Forms({user, onUpdate}){
    const [FormData, setFormData] = useState({name: user.name, email: user.email, username: user.username})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onUpdate(FormData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value ={FormData.name} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Email:
                <input types="email" name="email" value ={FormData.email} onChange={handleChange}/>
                <br/>
            </label>
            <label>
                Username:
                <input types="username" name="username" value ={FormData.username} onChange={handleChange}/>
                <br/>
                <button type="submit">Update Button</button>
            </label>
        </form>
    );

}

export default Forms;