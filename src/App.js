import React from "react";
import "./App.css";
import Form from "./Components/Form.js";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form />
      <Users />
    </div>
  );
}

export default App;
