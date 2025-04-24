import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SignIn from './pages/SignIn.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
