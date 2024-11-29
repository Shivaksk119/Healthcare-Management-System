import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/api';
import './UserList.css'; // Import UserList-specific styles

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            const data = await getUsers(token);
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.username} - {user.role}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;