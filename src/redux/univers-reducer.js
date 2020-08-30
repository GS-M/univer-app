import { act } from "react-dom/test-utils";
import University from "../classUniversity"
import { UniversAPI } from "../api/api";
let initialState = {
    university: [

    ]
}

const universReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UNIVERS':

            //for(let i =0; i<action.univers.length;i++)
            let newObject = action.univers.map((arr) => (arr = new University(arr.budget_places, arr.foreign_places, arr.id, arr.min_budget_score, arr.min_paid_score, arr.name, arr.paid_places, arr.price)))

            state.university = newObject
            return {
                ...state,
                university: [...state.university]
            };
        default: return state;
    }
}

export default universReducer;
export const setUniversAC = (univers) => ({ type: 'SET_UNIVERS', univers })

export const getUniversThunk = () => {
    return (dispatch) => {
        UniversAPI.getUnivers()
            .then(response => response.json())
            .then((university) => {
                dispatch(setUniversAC(university.data))
            })
    }
}

export const addUniversityThunk = (name, price, paidPlaces, budgetPlaces, minPaidScore, minBudgetScore, foreignPlaces) => {
    return (dispatch) => {
        UniversAPI.addNewUniver(name, price, paidPlaces, budgetPlaces, minPaidScore, minBudgetScore, foreignPlaces)
            .then(() => {
                dispatch(getUniversThunk())
            })
    }
}