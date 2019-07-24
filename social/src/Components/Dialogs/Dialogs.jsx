import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem=(props)=>{    /*инкапсуляция диалогов */
    let path='/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=>{ /*инкапсуляция сообщений  */
    return(
        <div className={s.message}>{props.message}</div>
    )

}

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Kamo' id='1'/>
                <DialogItem name='Arut' id='2'/>
                <DialogItem name='Karine' id='3'/>
                <DialogItem name='Hovo' id='4'/>
                <DialogItem name='Arman' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='hello'/>
                <Message message='bye'/>
            </div>
        </div>

    )
}

export default Dialogs;