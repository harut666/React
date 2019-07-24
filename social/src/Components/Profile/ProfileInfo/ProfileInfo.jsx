import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                 <img src="https://clck.ru/H82HT" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
               avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;