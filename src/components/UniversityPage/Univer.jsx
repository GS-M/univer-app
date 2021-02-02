import React from 'react';
import { NavLink } from 'react-router-dom';

class Univer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            takeId: this.props.uni.id
        }
    }
    // addId = (event) => {
    //     console.log(event.target.id)
    //     this.setState({ takeId: event.target.id })
    // }
    sendRequest = () => {
        this.props.getCurrentUniverThunk(this.state.takeId)
    }
    render() {
        return (
            <div>
                <div className="university" >
                    <ul>
                        <li><NavLink to='/currentUni' id={this.props.uni.id} onClick={this.sendRequest}>{this.props.uni.name}</NavLink><ul>
                            <li>Бюджeтных мест: {this.props.uni.budget_places}</li>
                            <li>Платных мест: {this.props.uni.paid_places}</li>
                            <li>Мест для иностранцев: {this.props.uni.foreign_places}</li>
                            <li>Минимальные баллы на бюджет: {this.props.uni.min_budget_score}</li>
                            <li>Минимальные баллы на платку: {this.props.uni.min_paid_score}</li>
                            <li>Стоимость обучения: {this.props.uni.price} руб.</li></ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Univer;
