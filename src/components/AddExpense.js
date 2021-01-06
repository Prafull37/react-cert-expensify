import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./child/ExpenseForm";
import {addExpense} from "../redux/actionCreators/expenseAction"


export class AddExpense extends React.Component {
    onSubmit = (expense) => {
      this.props.addExpense(expense);
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddExpense);