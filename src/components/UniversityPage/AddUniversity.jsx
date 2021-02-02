import React from 'react';
import { UniversAPI } from '../../api/api';
import {addUniversityThunk} from '../../redux/univers-reducer'
import { connect } from 'react-redux';

// function AddUniver() {
//     let takeName = React.createRef();
//     let takeBudget = React.createRef();
//     let takePaid = React.createRef();
//     let takeForeign = React.createRef();
//     let takeMinBudget = React.createRef();
//     let takeMinPaid = React.createRef();
//     let takePrice = React.createRef();

//     function addUni() {
//         if (takeName.current.value === '' || takePrice.current.value === '' || takePaid.current.value === '' || takeBudget.current.value === '' || takeMinPaid.current.value === '' && takeMinBudget.current.value === '' && takeForeign.current.value) {
//             return alert("Заполните все поля")
//         }
//         fetch(`https://grnl.herokuapp.com/university?name=${takeName.current.value}&price=${takePrice.current.value}&paid_places=${takePaid.current.value}&budget_places=${takeBudget.current.value}&min_paid_score=${takeMinPaid.current.value}&min_budget_score=${takeMinBudget.current.value}&foreign_places=${takeForeign.current.value}`, {
//             method: "POST"
//         })
//             .then(() => {

//             })
//     }
//     return (
//         <div className='add-univer'>
//             <h2 id="finish">Добавить университет</h2>
//             <p><input ref={takeName} type="text" id="name" placeholder="Название университета"></input></p>
//             <p><input ref={takeBudget} type="text" id="budget" placeholder="Кол-во бюджетных мест"></input></p>
//             <p><input ref={takePaid} type="text" id="paid" placeholder="Кол-во платных мест"></input></p>
//             <p><input ref={takeForeign} type="text" id="foreign" placeholder="Кол-во мест для иностранцев"></input></p>
//             <p><input ref={takeMinBudget} type="text" id="min_budget" placeholder="Мин. баллы на бюджет"></input></p>
//             <p><input ref={takeMinPaid} type="text" id="min_paid" placeholder="Мин. баллы на платку"></input></p>
//             <p><input ref={takePrice} type="text" id="priсe" placeholder="Стоимость обучения"></input></p>
//             <button onClick={addUni} type="button" id="oman" onclick="save()">Добавить</button>
//         </div>
//     )
// }

//export default AddUniver;

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

export default connect(null,{addUniversityThunk})(AddUniversity);
// Addddd

