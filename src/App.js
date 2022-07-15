import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Info from './pages/Info/Info';
import Login from './pages/Login/Login';
import UserProvider from './hooks/useUserContext';
function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
