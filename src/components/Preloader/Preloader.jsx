import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let Preloader = (props) => {
    if (props.isLoading == true) {
        return (
            <div className="content-blocker">
                <div class="loaderr">
                </div>
            </div>
        )
    }
    if (props.firstPage) {
        return (<Redirect to={'/university'} />)
    }
    return (<div></div>)
}

const mapStateToProps = (state) => ({
    isLoading: state.universityPage.isLoading,
    firstPage: state.universityPage.firstPage
})
export default connect(mapStateToProps, {})(Preloader);