import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('https://verbose-engine-gpq7rxpp9jf9gwp-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {entries.map(entry => (
          <li key={entry._id} className="list-group-item">
            {entry.user && entry.user.username} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
