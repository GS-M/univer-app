import React from 'react';
import { NavLink } from 'react-router-dom';
import StudentsList from './StudentsList';

let CurrentUniver = (props) => {
    return (
        <div className='current-univer'>
            <NavLink to='/university'>Вернуться на прошлую страницу</NavLink>
            <p className='current-univer__name'>{props.name}</p>
            <h3 className='current-univer__title'>Инфа о универе:</h3>
            <ul className='current-univer__info'>
                <li>Бюджeтных мест: {props.budgetPlaces}</li>
                <li>Платных мест: {props.paidPlaces}</li>
                <li>Мест для иностранцев: {props.foreignPlaces}</li>
                <li>Минимальные баллы на бюджет: {props.minBudgetScore}</li>
                <li>Минимальные баллы на платку: {props.minPaidScore}</li>
                <li>Стоимость обучения: {props.price} руб.</li>
            </ul>
            <h3 className='current-univer__title'>Обучающиеся студенты:</h3>

            { props.infoStudents.map((stud, index) =>
                (<StudentsList name={stud.name} id={stud.id} key={stud.id} place={index} placeInArreyAC={props.placeInArreyAC} />))}
        </div>
    )
}

export default CurrentUniver