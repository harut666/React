import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div >
        <div>
            <img src="https://clck.ru/H82HT" alt=""/>
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts/>
    </div>

}

export default Profile;