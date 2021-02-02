import React from 'react';
import { NavLink } from 'react-router-dom';
import StudentsList from './StudentsList';

let CurrentUniver = (props) => {
    return (
        <div>
            <NavLink to='/university'>Вернуться на прошлую страницу</NavLink>
            <h1>{props.name}</h1>
            <p>Инфа о универе:</p>
            <ul>
                <li>Бюджeтных мест: {props.budgetPlaces}</li>
                <li>Платных мест: {props.paidPlaces}</li>
                <li>Мест для иностранцев: {props.foreignPlaces}</li>
                <li>Минимальные баллы на бюджет: {props.minBudgetScore}</li>
                <li>Минимальные баллы на платку: {props.minPaidScore}</li>
                <li>Стоимость обучения: {props.price} руб.</li>
            </ul>
            <p>Обучающиеся студенты:</p>
            { props.infoStudents.map(stud => <StudentsList name={stud.name} id={stud.id} key={stud.id} />)}
        </div>
    )
}

export default CurrentUniver