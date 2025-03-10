import { useState } from "react";
import PageHeader from "../header/PageHeader";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserCreate() {
    const [user, setUser] = useState({id: '', uid:'', name: '', address: '', phone: '', email: '', password: ''});
    const navigate = useNavigate();

    const txtBoxOnChange = event => {
        const updatableUser = { ...user };
        updatableUser[event.target.id] = event.target.value;
        setUser(updatableUser);
    };

    const createUser = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.post(`${baseUrl}/users`, { ...user });
            const createdUser = response.data.user;
            setUser(createdUser);
            alert(response.data.message);
            navigate('/users/list');
        } catch (error) {
            alert('Server Error');
        }
    };

    return (
        <>
            <PageHeader />            
            <h3><a href="/users/list" className="btn btn-light">Go Back</a> Add User</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="uid" className="form-label">User ID:</label>
                    <input type="uid" className="form-control" id="uid" 
                        placeholder="Please enter User ID"
                        value={user.uid} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" 
                        placeholder="Please enter user name"
                        value={user.name} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" 
                        placeholder="Please enter address"
                        value={user.address} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="phone" 
                        placeholder="Please enter phone number"
                        value={user.phone} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email ID:</label>
                    <input type="email" className="form-control" id="email" 
                        placeholder="Please enter email ID"
                        value={user.email} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" 
                        placeholder="Please enter the Password"
                        value={user.password} 
                        onChange={txtBoxOnChange} />
                </div>
                <button className="btn btn-primary" onClick={createUser}>Create User</button>
            </div>
        </>
    );
}

export default UserCreate;