import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
    <div className={s.item}>
                    <img src='https://clck.ru/HFd5C'/>
                    {props.message}
                    <br/>
                    <span>Like </span> {props.likesCount}
                    </div>

    )

}


export default Post;