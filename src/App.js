import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(username, age) {
    setUsers((users) => {
      return [...users, { id: Math.random().toString() , name: username, age: age }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={users}></UserList>
      
    </div>
  );
}

export default App;
