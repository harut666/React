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

    let dialogs = [
        {id:1, name: 'Kamo'},
        {id:2, name: 'Arut'},
        {id:3, name: 'Karine'},
        {id:4, name: 'Hovo'},
        {id:5, name: 'Arman'}
        ]

    let messages = [
        {id:1, message: 'hi'},
        {id:2, message: 'hello'},
        {id:3, message: 'bye'},

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m=> <Message message={m.message} id={m.id}/>);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
                </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;