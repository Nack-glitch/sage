// src/components/Users.jsx
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h1><strong>{user.name}</strong> </h1>
            <h2>{user.username}</h2> 
            <h3>{user.email}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
