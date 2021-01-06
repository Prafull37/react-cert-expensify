import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../../utils/sortAndFilter"
import ExpenseListItems from './ExpenseListItems';

export const ExpenseList=(props)=>{
    const {expenses}=props;
  
    return (
        <div>

           <h3>Expense List</h3>
            {expenses.length===0?<div>No Expenses</div>:
            <div>{expenses.map((expense)=><ExpenseListItems key={expense.id} {...expense}/>)}</div>
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
  console.log("state",state)
    return {

       expenses:selectExpenses(state.expenses,state.filter)
   }
}

export default connect(mapStateToProps)(ExpenseList);