import React from 'react';
import Univer  from './Univer';

class Univers extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        fetch("https://grnl.herokuapp.com/university")
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