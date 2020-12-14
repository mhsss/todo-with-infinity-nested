import React, { memo } from 'react'

export const Form = memo((props) => {

    return (
        <form className={props.style} onSubmit={props.onSubmit}>

            <input value={props.value} placeholder={props.placeholder} type='text' />
            <button className={props.addStyle}>{props.addName}</button>

            { props.deleteCondition
                ? <div className={props.delStyle} onClick={props.onDelClick}>{props.delName}</div>
                : null
            }

        </form>
    )
})