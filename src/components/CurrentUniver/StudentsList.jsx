import React from 'react';
import { NavLink } from 'react-router-dom';

class StudentsList extends React.Component {
    constructor(props) {
        super(props)
    }
    setPlace = () => {
        this.props.placeInArreyAC(this.props.place)
    }
    render() {
        return (
            <div>
                <NavLink to={'/currentStudent'} onClick={this.setPlace} key={this.props.id}>{this.props.name}</NavLink>
            </div >
        )
    }
}

export default StudentsList