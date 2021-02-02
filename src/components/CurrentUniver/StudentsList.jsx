import React from 'react';
import { NavLink } from 'react-router-dom';

class StudentsList extends React.Component {
    render() {
        return (
            <div>
                <NavLink to={'/currentStudent'} key={this.props.id}>{this.props.name}</NavLink>
            </div>
        )
    }
}

export default StudentsList