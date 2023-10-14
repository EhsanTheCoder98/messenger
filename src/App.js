import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import Chats from "./Chats.js"

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats" element={<Chats />}/>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
