import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SignIn from './pages/SignIn.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SignUp from './pages/SignUp.jsx';
import UserLayout from './pages/UserLayout.jsx';
import Posts from './pages/Posts.jsx';
import Mentors from './pages/Mentors.jsx';
import UserDashboard from './pages/UserDashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <section className='h-full bg-black text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/user-dashboard' element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path='posts' element={<Posts />} />
            <Route path='mentors' element={<Mentors />} />
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
