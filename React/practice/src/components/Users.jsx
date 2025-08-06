
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
            <h1>Name: <strong>{user.name}</strong> </h1>
            <h2>Username: {user.username}</h2> 
            <h2>Id: {user.id}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Phone: {user.phone}</h4>
            <h4>Website: {user.website}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
