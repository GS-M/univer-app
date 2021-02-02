import React from 'react';
import Univer from './Univer';
import { UniversAPI } from '../../api/api';
import AddUniversity from './AddUniversity';
import { Header } from './Header';

class Univers extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getUniversThunk()
    }

    render() {
        return (<div>
            <Header/>
            <h2 className="22" id="begin">Список университетов:</h2>
            {
                this.props.university.map(uni => <Univer uni={uni} key={uni.id}
                    getCurrentUniverThunk={this.props.getCurrentUniverThunk} />)
            }
            <AddUniversity />
        </div>)
    }
}

export default Univers;