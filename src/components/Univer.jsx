import React from 'react';


let Univer = (props) => {
    return (<div>
        {
            props.university.map(uni =>

                <div className="university" key={uni.id}>
                    <ul>
                        <li><a id={uni.id} href="newPage.html" /*onClick="newP(id)"*/>{uni.name}</a><ul>
                            <li>Бюджeтных мест: {uni.budget_places}</li>
                            <li>Платных мест: {uni.paid_places}</li>
                            <li>Мест для иностранцев: {uni.foreign_places}</li>
                            <li>Минимальные баллы на бюджет: {uni.min_budget_score}</li>
                            <li>Минимальные баллы на платку: {uni.min_paid_score}</li>
                            <li>Стоимость обучения: {uni.price} руб.</li></ul>
                        </li>
                    </ul>
                </div>
            )
        }
    </div>
    )
}

export default Univer;