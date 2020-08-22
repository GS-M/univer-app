import React from 'react';
import { connect } from 'react-redux';
import  Univers  from './Univers';
import { setUniversAC, getUniversThunk } from '../redux/univers-reducer';


let mapStateToProps=(state)=>{
    return {university: state.universityPage.university}  
}

let UniverContainer = connect(mapStateToProps, {getUniversThunk})(Univers);
export default UniverContainer;