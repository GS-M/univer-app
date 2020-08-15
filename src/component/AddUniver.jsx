import React from 'react';
import { rerender } from '..';

function AddUniver() {
    let takeName = React.createRef();
    let takeBudget = React.createRef();
    let takePaid = React.createRef();
    let takeForeign = React.createRef();
    let takeMinBudget = React.createRef();
    let takeMinPaid = React.createRef();
    let takePrice = React.createRef();

    function addUni() {
        if (takeName.current.value === '' || takePrice.current.value === '' || takePaid.current.value === '' || takeBudget.current.value === '' || takeMinPaid.current.value === '' && takeMinBudget.current.value === '' && takeForeign.current.value) {
            return alert("Заполните все поля")
        }
        fetch(`https://grnl.herokuapp.com/university?name=${takeName.current.value}&price=${takePrice.current.value}&paid_places=${takePaid.current.value}&budget_places=${takeBudget.current.value}&min_paid_score=${takeMinPaid.current.value}&min_budget_score=${takeMinBudget.current.value}&foreign_places=${takeForeign.current.value}`, {
            method: "POST"
        })
        .then(() => {
            
        })
    }
    return (
        <div className='add-univer'>
            <h2 id="finish">Добавить университет</h2>
            <p><input ref={takeName} type="text" id="name" placeholder="Название университета"></input></p>
            <p><input ref={takeBudget} type="text" id="budget" placeholder="Кол-во бюджетных мест"></input></p>
            <p><input ref={takePaid} type="text" id="paid" placeholder="Кол-во платных мест"></input></p>
            <p><input ref={takeForeign} type="text" id="foreign" placeholder="Кол-во мест для иностранцев"></input></p>
            <p><input ref={takeMinBudget} type="text" id="min_budget" placeholder="Мин. баллы на бюджет"></input></p>
            <p><input ref={takeMinPaid} type="text" id="min_paid" placeholder="Мин. баллы на платку"></input></p>
            <p><input ref={takePrice} type="text" id="priсe" placeholder="Стоимость обучения"></input></p>
            <button onClick={addUni} type="button" id="oman" onclick="save()">Добавить</button>
        </div>
    )
}

export default AddUniver;