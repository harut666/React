import React from 'react';
import s from './Navbar.module.css';


const Navbar = () => {
    return <nav className='nav'>
        <div className={s.item}><a>Profile</a></div>
        <div className={s.item}><a>Messages</a></div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <br/>
        <div className={s.item}><a>Setting</a></div>
    </nav>

}

export default Navbar;