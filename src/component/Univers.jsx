import React from 'react';
import { Univer } from './Univer';

class Univers extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        fetch("https://grnl.herokuapp.com/university")
        .then(response => response.json())
        .then((university) => {

            this.props.setUnivers(university.data)

        })
    }
    // universList = props.newArr.map((list) =>
    //     (<Univer id = {list.id} 
    //         name = {list.name} 
    //         budget_places= {list.budget_places}
    //         paid_places = {list.paid_places}
    //         foreign_places = {list.foreign_places}
    //         min_budget_score = {list.min_budget_score}
    //         min_paid_score = {list.min_paid_score}
    //         price = {list.price}
    //         />));

    // Эт можно вынести в отдельную компоненту Univer
    render() {
        return <div>
            {
                this.props.university.map(uni =>

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
                )}
        </div>

    }
}

export default Univers;