import React from 'react';
import { NavLink } from 'react-router-dom';

let CurrentStudent = (props) => {
    return (
        <div className='current-student'>
            <p>Имя: <b>{props.arrayStudents[props.place].name}</b></p>
            <p>ID студента: {props.arrayStudents[props.place].id}</p>
            <p>Деньги: {props.arrayStudents[props.place].money}</p>
            <p>ID университета: {props.arrayStudents[props.place].university_id}</p>
            <p>Название университета: <NavLink to='/currentUni'>{props.univerName}</NavLink></p>
        </div>
    )
}

export default CurrentStudent