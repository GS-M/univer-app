import React from 'react';
import Univer from './Univer';
import { UniversAPI } from '../api/api';

class Univers extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getUniversThunk()
    }

    render() {
        return (<div>
            <Univer university={this.props.university} />
        </div>)
    }
}

export default Univers;