
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Frontpage from './component/Frontpage';
import Loginpage from './component/Loginpage';
import Forgot from './component/Forgot';
import SetProfile from './component/SetProfile';
import VerifyOTP from './component/VerifyOTP';
import VerifyOTPpassword from './component/VerifyOTPpassword';
import Notification from './component/Notification';
import Profile from './component/Profile';
import Fee from './component/Fee';
import Payment from './component/Payment';

function App() {
  return (
  <div className='bg-gradient-to-r from-blue-500 to-purple-800 ...'>
    <Router>
      <div className='bg-gradient-to-r from-blue-500 to-purple-800 ...'>
        {/* <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Frontpage</Link></li>
            <li><Link to="/login">Loginpage</Link></li>
            <li><Link to="/Forgot">Forgot</Link></li>
            <li><Link to="/setprofile">setprofile</Link></li>
            <li><Link to="/verifyotp">verify</Link></li>
            <li><Link to="/verifyotpchnge">otpchnge</Link></li>
            <li><Link to="/notification">notification</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/fee">Fee</Link></li>
            
          </ul>
        </nav> */}
        <Routes>
          <Route path="/home" element={<Home/>}  />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/" element={<Frontpage/>}  />
          <Route path="/login" element={<Loginpage/>}  />
          <Route path="/Forgot" element={<Forgot/>}  />
          <Route path="/setprofile" element={<SetProfile/>}  />
          <Route path="/verifyotpchnge" element={<VerifyOTPpassword/>}  />
          <Route path="/profile/:studentuid" element={<Profile/>} />
          <Route path="/verifyotp" element={<VerifyOTP/>}  />
          <Route path="/notification" element={<Notification/>}  />
          <Route path="/fee" element={<Fee/>}  />
          <Route path="/payment/:semester/:amount" element={<Payment/>}  />


        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
