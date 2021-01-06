import React from 'react';
import ExpenseList from './child/ExpenseList';
import ExpenseListFilters from "./child/ExpenseListFilter";

const ExpenseDashboard=(props)=>(<div>
    <ExpenseListFilters/>
    <ExpenseList/>
</div>)

export default ExpenseDashboard;