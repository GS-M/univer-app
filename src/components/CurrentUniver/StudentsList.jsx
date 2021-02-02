import React from 'react';
import { NavLink } from 'react-router-dom';

let StudentsList = (props) => {
    return (
        <div>
            <NavLink to={'/currentStudent'} key={props.id}>{props.name}</NavLink>
        </div>
    )
}

export default StudentsList