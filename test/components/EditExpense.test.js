import React from "react";
import {shallow} from "enzyme";
import {EditExpense} from "../../src/components/EditExpense";
import expenses from "../fixtures/expense"

let startEditExpense, startRemoveExpense,editExpense,removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <EditExpense
        startEditExpense={editExpense}
        startRemoveExpense={removeExpense}
        history={history}
        expense={expenses[2]}
      />
    );
  });
  
  test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith({id:expenses[2].id,updates: expenses[2]});
  });
  
  test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(
      expenses[2].id
    );
  });