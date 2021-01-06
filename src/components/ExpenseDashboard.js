import React from 'react';
import ExpenseList from './child/ExpenseList';
import ExpenseListFilters from "./child/ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";
const ExpenseDashboard=(props)=>(<div>
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
</div>)

export default ExpenseDashboard;