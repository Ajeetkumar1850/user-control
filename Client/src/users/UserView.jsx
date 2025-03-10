import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import axios from 'axios';

function UserView() {
    const [user, setUser] = useState({id: '',uid:'', name: '', address: '', phone: '', email: '', password: ''});
    const params = useParams();

    const readById = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.get(`${baseUrl}/users/${params.id}`);
            const queriedUser = response.data;
            setUser(queriedUser);
        } catch (error) {
            alert('Server Error');
        }
    };

    useEffect(() => {
        readById();
    }, []);

    return (
        <>
            <PageHeader />
            <h3><a href="/users/list" className="btn btn-light">Go Back</a> View User</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label className="form-label">User ID:</label>
                    <div className="form-control">{user.uid}</div>
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">User Name:</label>
                    <div className="form-control">{user.name}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Address:</label>
                    <div className="form-control">{user.address}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Phone Number:</label>
                    <div className="form-control">{user.phone}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Email ID:</label>
                    <div className="form-control">{user.email}</div>
                </div>
            </div>
        </>
    );
}

export default UserView;