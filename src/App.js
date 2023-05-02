import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    if (showUsers) {
      getUsersData();
    }
  }, [showUsers]);

  function getUsersData() {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }

  function handleClick() {
    setShowUsers(true);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Get Users</button>
      {showUsers && (
        <div className="user-cards">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <p>{user.id}</p>
              <img src={user.avatar} alt="User Avatar" />
              <div className="user-details">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
