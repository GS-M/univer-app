import React from 'react';
import Univer  from './Univer';
import { UniversAPI } from '../api/api';

class Univers extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        UniversAPI.getUnivers()
        .then(response => response.json())
        .then((university) => {

            this.props.setUnivers(university.data)

        })
    }

    // Эт можно вынести в отдельную компоненту Univer
    render() {
        return <div>
            <Univer university={this.props.university}/>
        </div>

    }
}

export default Univers;