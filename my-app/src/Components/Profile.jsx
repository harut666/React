import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://clck.ru/H82HT" alt=""/>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            my posts
            <div> new posts</div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;