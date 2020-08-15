class University {
    budget_places
    foreign_places
    id
    min_budget_score
    min_paid_score
    name
    paid_places
    price
    constructor(budget_places, foreign_places, id, min_budget_score, min_paid_score, name, paid_places, price) {
        this.budget_places = budget_places
        this.foreign_places = foreign_places
        this.id = id
        this.min_budget_score = min_budget_score
        this.min_paid_score = min_paid_score
        this.name = name
        this.paid_places = paid_places
        this.price = price
    }
}

export default University;