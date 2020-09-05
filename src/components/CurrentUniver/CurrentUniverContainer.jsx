//import React from 'react';

// class CurrentUniver extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <a href="All-university.html">Вернуться на прошлую страницу</a>
//                 <h1>${this.props.Name}</h1>
//                 <p>Инфа о универе:</p>
//                 <ul>
//                     <li>Бюджeтных мест: ${this.props.BudgetPlaces}</li>
//                     <li>Платных мест: ${this.props.PaidPlaces}</li>
//                     <li>Мест для иностранцев: ${this.props.ForeignPlaces}</li>
//                     <li>Минимальные баллы на бюджет: ${this.props.MinBudgetScore}</li>
//                     <li>Минимальные баллы на платку: ${this.props.MinPaidScore}</li>
//                     <li>Стоимость обучения: ${this.props.price} руб.</li>
//                 </ul>
//                 <p>Обучающиеся студенты:</p>
//             </div>
//         )
//     }
// }


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