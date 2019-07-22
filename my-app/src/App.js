import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navbar from './Navbar/Navbar'
import Profile from './Components/Profile'
const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
}

export default App;
