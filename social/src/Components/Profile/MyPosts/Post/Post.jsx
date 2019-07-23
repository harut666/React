import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
    <div className={s.item}>
                    <img src='https://clck.ru/HDS84'/>
                    {props.message}
                    </div>
    )

}


export default Post;