import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://verbose-engine-gpq7rxpp9jf9gwp-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item">
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
