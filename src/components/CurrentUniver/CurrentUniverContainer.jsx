import { connect } from 'react-redux';
import CurrentUniver from './CurrentUniver';
import { getCurrentUniverThunk } from '../../redux/univers-reducer';

let mapStateToProps = (state) => {
    return {
        name: state.universityPage.currentUniverName,
        budgetPlaces: state.universityPage.currentUniverBudgetPlaces,
        paidPlaces: state.universityPage.currentUniverPaidPlaces,
        foreignPlaces: state.universityPage.currentUniverForeignPlaces,
        minBudgetScore: state.universityPage.currentUniverMinBudgetScore,
        minPaidScore: state.universityPage.currentUniverMinPaidScore,
        price: state.universityPage.currentUniverPrice,
        infoStudents: state.universityPage.studentsIncurrentUni,
    }
}

let CurrentUniverContainer = connect(mapStateToProps, { getCurrentUniverThunk })(CurrentUniver);
export default CurrentUniverContainer;