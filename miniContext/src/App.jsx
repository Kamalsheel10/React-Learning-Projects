import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Learning React</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
};

export default App;
