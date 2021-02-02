import React from 'react';

export const UniversAPI = {
    getUnivers: () => {
        return fetch("https://grnl.herokuapp.com/university")
    },

    addNewUniver: (name, price, paidPlaces, budgetPlaces, minPaidScore, minBudgetScore, foreignPlaces) => {
        return (fetch(`https://grnl.herokuapp.com/university?name=${name}&price=${price}&paid_places=${paidPlaces}&budget_places=${budgetPlaces}&min_paid_score=${minPaidScore}&min_budget_score=${minBudgetScore}&foreign_places=${foreignPlaces}`, {
            method: "POST"
        })
        )
    },

    showUniver: (UniverId) => {
        return (fetch(`https://grnl.herokuapp.com/university?id=${UniverId}`))
    }
}