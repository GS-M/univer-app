import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Preloader extends React.Component {
    render() {
        if (this.props.firstPage) {
            return <Redirect to={'/university'} />
        } 
        return (
            <div>Здеся будет Preloader</div>
        )
    }
}

const mapStateToProps = (state) => ({
    firstPage: state.universityPage.firstPage
})
export default connect(mapStateToProps, {})(Preloader);