import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
    <div className={s.item}>
                    <img src='https://clck.ru/HDS84'/>
                    {props.message}
                    <br/>
                    <span>Like </span> {props.age}
                    </div>

    )

}


export default Post;