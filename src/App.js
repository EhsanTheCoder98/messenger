import React from 'react';
import Login from './Login';
import {Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
    </Routes>
  );
};

export default App;