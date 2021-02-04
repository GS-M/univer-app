import University from "../classUniversity"
import { UniversAPI } from "../api/api";
let initialState = {
    university: [],
    studentsIncurrentUni: [],

    currentUniverName: 'null',
    currentUniverPrice: 'null',
    currentUniverPaidPlaces: 'null',
    currentUniverBudgetPlaces: 'null',
    currentUniverMinPaidScore: 'null',
    currentUniverMinBudgetScore: 'null',
    currentUniverForeignPlaces: 'null',
    currentUniverId: 'null',
    firstPage: true,
    currentStudentIndex: 0
}

const universReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UNIVERS':
            let newObject = action.univers.map((arr) => (arr = new University(arr.budget_places, arr.foreign_places, arr.id, arr.min_budget_score, arr.min_paid_score, arr.name, arr.paid_places, arr.price)))
            state.university = newObject
            return {
                ...state,
                university: [...state.university]
            };
        case 'GET-CURRENT-UNIVERS-DATA':
            return {
                ...state,
                studentsIncurrentUni: [...action.students],
                currentUniverName: action.name,
                currentUniverPrice: action.price,
                currentUniverPaidPlaces: action.paidPlaces,
                currentUniverBudgetPlaces: action.budgetPlaces,
                currentUniverMinPaidScore: action.minPaidScore,
                currentUniverMinBudgetScore: action.minBudgetScore,
                currentUniverForeignPlaces: action.foreignPlaces
            };
        case 'SAVE_STUDENT_INDEX':
            return {
                ...state,
                currentStudentIndex: action.index
            }
        default: return state;
    }
}

export default universReducer;
export const setUniversAC = (univers) => ({ type: 'SET_UNIVERS', univers })
export const getCurrentUniverAC = (name, price, paidPlaces, budgetPlaces, minPaidScore, minBudgetScore, foreignPlaces, students) => ({
    type: 'GET-CURRENT-UNIVERS-DATA', name, price, paidPlaces, budgetPlaces, minPaidScore, minBudgetScore, foreignPlaces, students
})
export const placeInArreyAC = (index) => ({ type: 'SAVE_STUDENT_INDEX', index })

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

export const getCurrentUniverThunk = (univerId) => {
    return (dispatch) => {
        UniversAPI.showUniver(univerId)
            .then(response => response.json())
            .then((univer) => {
                dispatch(getCurrentUniverAC(univer.data.name, univer.data.price, univer.data.paid_places,
                    univer.data.budget_places, univer.data.min_paid_score, univer.data.min_budget_score,
                    univer.data.foreign_places, univer.data.students))
            })
    }
}

