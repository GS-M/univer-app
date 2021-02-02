import { connect } from 'react-redux';
import Univers from './Univers';
import { getUniversThunk, getCurrentUniverThunk, addUniversityThunk } from '../../redux/univers-reducer';

let mapStateToProps = (state) => {
    return { university: state.universityPage.university }
}

let UniverContainer = connect(mapStateToProps, { getUniversThunk, getCurrentUniverThunk, addUniversityThunk })(Univers);
export default UniverContainer;