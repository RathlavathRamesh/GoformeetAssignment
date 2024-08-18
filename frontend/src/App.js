import React from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import UserProfileForm from './components/UserProfileForm';
import UserProfileWall from './components/UserProfileWall';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewprofiles" element={<UserProfileWall />} />
        <Route path='/create-profile' element={<UserProfileForm/>}/>
      </Routes>
    </Router>
  )
}


export default App;
