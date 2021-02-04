import React from 'react';
import Univer from './Univer';
import AddUniversity from './AddUniversity';
import Header from './Header';

class Univers extends React.Component {
    componentDidMount() {
        this.props.getUniversThunk()
    }

    render() {
        return (<div>
            <Header />
            <h2 className="univer-list" id="begin">Список университетов:</h2>
            {
                this.props.university.map(uni => <Univer uni={uni} key={uni.id}
                    getCurrentUniverThunk={this.props.getCurrentUniverThunk} />)
            }
            <AddUniversity addUniversityThunk={this.props.addUniversityThunk} />
        </div>)
    }
}

export default Univers;