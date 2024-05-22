import React from 'react';
import Login from '../components/Login.jsx';
import loginStyle from '../styles/login.module.css'
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={loginStyle.containerLogin}>
      <Login />
    </div>
    
  )
}

export default Home