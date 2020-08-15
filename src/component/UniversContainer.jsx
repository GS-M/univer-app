import React from 'react';
import { connect } from 'react-redux';
import  Univers  from './Univers';
import { setUniversAC } from '../redux/univers-reducer';


let mapStateToProps=(state)=>{
    //debugger
    return {university: state.universityPage.university}
    
}
let mapDispathToProps=(dispatch)=>{
    return {
        setUnivers: (univers) => {dispatch(setUniversAC(univers))}
    }
}

let UniverContainer = connect(mapStateToProps, mapDispathToProps)(Univers);
export default UniverContainer;