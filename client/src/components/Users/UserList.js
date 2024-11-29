import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import { getUsers } from '../../services/api'; // Import the getUsers function from the API service

const UserList = () => {
    const [users, setUsers] = useState([]); // Initialize state for users

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const data = await getUsers(token); // Call the getUsers function with the token
            setUsers(data); // Update the state with the fetched users
        };
        fetchUsers(); // Fetch users when the component mounts
    }, []);

    return (
        <div>
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
