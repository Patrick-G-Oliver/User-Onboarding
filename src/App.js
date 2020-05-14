import React, {useState} from "react";
import "./App.css";
import Form from "./Components/Form.js";
import Users from "./Components/Users";

function App() {
  // 1) set up state property called 'users' that is initialized 
  // with an empty array 
  const [users, setUsers] = useState([]);
  // 2) Every time you make a POST request, and get that new user data back, update your users state with the new user added to the array
  
  console.log(users);

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form users = {users} setUsers = {setUsers} />
      {users.map( (user) => {
         return  <Users key={user.id} user={user}/>
      })}
    </div>
  );
}

export default App;
