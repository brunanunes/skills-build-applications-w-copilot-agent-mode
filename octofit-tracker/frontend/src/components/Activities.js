import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://verbose-engine-gpq7rxpp9jf9gwp-8000.app.github.dev/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map(activity => (
          <li key={activity._id} className="list-group-item">
            {activity.activity_type} - {activity.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
