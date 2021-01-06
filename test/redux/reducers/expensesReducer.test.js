import {addExpense,editExpense,removeExpense} from "../../../src/redux/actionCreators/expenseAction";
import expensesReducer,{expenseState} from "../../../src/redux/reducers/expensesReducer";
import expenses from "../../fixtures/expense";


test("should return default value",()=>{
    const expense=expensesReducer(expenseState,{type:"SOME_THING"});
    expect(expense).toEqual(expenseState);
})

test("should remove a expense on removeExpense call",()=>{
    const expense=expensesReducer(expenses,removeExpense(expenses[2].id));
    expect(expense).toEqual(expenses.slice(0,2));
})

test("should not remove any expense on removeExpense call with unknown id",()=>{
    const expense=expensesReducer(expenses,removeExpense("id1234"));
    expect(expense).toEqual(expenses);
})

test("should add an expense on addExpense call",()=>{
    const expenseData={
        ...expenses[1],
    }

    const testData={
        ...expenseData,
        id:expect.any(String)
    }
    const expense=expensesReducer([expenses[0]],addExpense(expenseData));
    expect(expense).toEqual([expenses[0],testData]);
})

test("should edit an expense on editExpense call",()=>{
    const expenseData={
       description:expenses[1].description,
       notes:expenses[1].notes,
       amount:expenses[1].amount,
       createdAt:expenses[1].createdAt
    }

    const testData={
        ...expenseData,
        id:expenses[0].id
    }
    const expense=expensesReducer([expenses[0]],editExpense({id:expenses[0].id,updates:{...expenseData}}));
    expect(expense).toEqual([testData]);
})

test("should not edit any expense on wrong id call",()=>{
    const expenseData={
       description:expenses[1].description,
       notes:expenses[1].notes,
       amount:expenses[1].amount,
       createdAt:expenses[1].createdAt
    }

    const expense=expensesReducer(expenses,editExpense({id:"xyz".id,updates:{...expenseData}}));
    expect(expense).toEqual(expenses);
})