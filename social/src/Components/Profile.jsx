import React from 'react';
import  './Profile.css';


const Profile = () => {
    return <div className='content'>
        <div>
            <img src="https://clck.ru/H82HT" alt=""/>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            my posts
            <div> new posts</div>
            <div className='posts'>
                <div className='posts'>
                    post 1
                </div>
                <div className='posts'>
                    post 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;