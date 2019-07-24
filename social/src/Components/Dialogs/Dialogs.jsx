import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Kamo
                </div>
                <div className={s.dialog}>
                    Arut
                </div>
                <div className={s.dialog}>
                    Karine
                </div>
                <div className={s.dialog}>
                    Hovo
                </div>
                <div className={s.dialog}>
                    Arman
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>what are you doing </div>
                <div className={s.message}>come here</div>
            </div>
        </div>

    )
}

export default Dialogs;