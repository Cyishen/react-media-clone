import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Notification from './components/Notification';
import Massages from './components/Massages';
import Lists from './components/Lists';
import Profile from './components/Profile';
import MobileFooter from './components/MobileFooter';

function App() {
  return (
    <Router>
      <div className="app">
        <header className='sidebar-container'>
          <Sidebar />
        </header>
        <main className='main-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/massages" element={<Massages />} />
            <Route path="/lists" element={<Lists />} /> 
            <Route path="/profile" element={<Profile />} /> 
          </Routes>
        </main>
        <footer className="bottom-menu">
          <MobileFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
