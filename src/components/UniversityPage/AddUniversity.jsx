import React from 'react';
import { addUniversityThunk } from '../../redux/univers-reducer'
import { connect } from 'react-redux';

class AddUniversity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            takeName: '',
            takeBudget: '',
            takePaid: '',
            takeForeign: '',
            takeMinBudget: '',
            takeMinPaid: '',
            takePrice: '',
        }
    }
    addChangesName = (event) => { this.setState({ takeName: event.target.value }) }
    addChangesBudget = (event) => { this.setState({ takeBudget: event.target.value }) }
    addChangesPaid = (event) => { this.setState({ takePaid: event.target.value }) }
    addChangesForeign = (event) => { this.setState({ takeForeign: event.target.value }) }
    addChangesMinBudget = (event) => { this.setState({ takeMinBudget: event.target.value }) }
    addChangesMinPaid = (event) => { this.setState({ takeMinPaid: event.target.value }) }
    addChangesPrice = (event) => { this.setState({ takePrice: event.target.value }) }

    sendToServer = () => {
        if (this.state.takeName === '' || this.state.takePrice === '' || this.state.takePaid === '' || this.state.takeBudget === '' || this.state.takeMinPaid === '' && this.state.takeMinBudget === '' && this.state.takeForeign) {
            return alert("Заполните все поля")
        }
        alert('Добавилось')
        this.props.addUniversityThunk(this.state.takeName, this.state.takePrice, this.state.takePaid, this.state.takeBudget, this.state.takeMinPaid, this.state.takeMinBudget, this.state.takeForeign)
    }

    render() {
        return (
            <div className='add-univer'>
                <h2 id="finish">Добавить университет</h2>
                <p><input type="text" value={this.state.takeName} id="name" placeholder="Название университета" onChange={this.addChangesName}></input></p>
                <p><input type="text" value={this.state.takeBudget} id="budget" placeholder="Кол-во бюджетных мест" onChange={this.addChangesBudget}></input></p>
                <p><input type="text" value={this.state.takePaid} id="paid" placeholder="Кол-во платных мест" onChange={this.addChangesPaid}></input></p>
                <p><input type="text" value={this.state.takeForeign} id="foreign" placeholder="Кол-во мест для иностранцев" onChange={this.addChangesForeign}></input></p>
                <p><input type="text" value={this.state.takeMinBudget} id="min_budget" placeholder="Мин. баллы на бюджет" onChange={this.addChangesMinBudget}></input></p>
                <p><input type="text" value={this.state.takeMinPaid} id="min_paid" placeholder="Мин. баллы на платку" onChange={this.addChangesMinPaid}></input></p>
                <p><input type="text" value={this.state.takePrice} id="priсe" placeholder="Стоимость обучения" onChange={this.addChangesPrice}></input></p>
                <button type="button" id="oman" onClick={this.sendToServer}>Добавить</button>
            </div>
        )
    }
}

export default connect(null, { addUniversityThunk })(AddUniversity);
// Addddd

