import React from 'react';
import { NavLink } from 'react-router-dom';
import StudentsList from './StudentsList';

class CurrentUniver extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavLink to='/university'>Вернуться на прошлую страницу</NavLink>
                <h1>{this.props.name}</h1>
                <p>Инфа о универе:</p>
                <ul>
                    <li>Бюджeтных мест: {this.props.budgetPlaces}</li>
                    <li>Платных мест: {this.props.paidPlaces}</li>
                    <li>Мест для иностранцев: {this.props.foreignPlaces}</li>
                    <li>Минимальные баллы на бюджет: {this.props.minBudgetScore}</li>
                    <li>Минимальные баллы на платку: {this.props.minPaidScore}</li>
                    <li>Стоимость обучения: {this.props.price} руб.</li>
                </ul>
                <p>Обучающиеся студенты:</p>
                {
                    this.props.infoStudents.map(stud => <StudentsList name={stud.name} id={stud.id} key={stud.id}/>)
                }
            </div>
        )
    }
}

export default CurrentUniver