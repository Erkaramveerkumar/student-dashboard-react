import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
// import NavBar from './components/NavBar';
import Login from './ProtectedRoutes/Login';
import Register from './ProtectedRoutes/Register';
import Dashboard from './ProtectedRoutes/Dashboard';
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute';
import Profile from './ProtectedRoutes/Profile';
import ProfileUpdate from './ProtectedRoutes/ProfileUpdate';

const App = () => {

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-update" element={<ProfileUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;