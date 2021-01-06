import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from './child/ExpenseForm';
import {editExpense,removeExpense} from "../redux/actionCreators/expenseAction"


export class EditExpense extends React.Component {
    onSubmit = (expense) => {
      this.props.startEditExpense({id:this.props.expense.id, updates:expense});
      this.props.history.push('/');
    };
    onRemove = () => {
      this.props.startRemoveExpense( this.props.expense.id );
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
          </div>
        </div>
      );
    }
  };
  
  const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  });
  
  const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (data) => dispatch(editExpense(data)),
    startRemoveExpense: (data) => dispatch(removeExpense(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);