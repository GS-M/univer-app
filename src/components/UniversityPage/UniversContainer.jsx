import React from 'react';
import { connect } from 'react-redux';
import Univers from './Univers';
import { setUniversAC, getUniversThunk, getCurrentUniverThunk } from '../../redux/univers-reducer';


let mapStateToProps = (state) => {
    return { university: state.universityPage.university }
}

let UniverContainer = connect(mapStateToProps, { getUniversThunk, getCurrentUniverThunk })(Univers);
export default UniverContainer;