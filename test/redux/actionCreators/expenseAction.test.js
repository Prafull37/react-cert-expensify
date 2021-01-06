import {addExpense,editExpense,removeExpense} from "../../../src/redux/actionCreators/expenseAction";
import {ADD_EXPENSE,EDIT_EXPENSE,REMOVE_EXPENSE} from "../../../src/redux/actions/expenseActionConstant"

test("should run truthy remove expense",function(){
    const result=removeExpense("t5");
    expect(result).toEqual({
        type:REMOVE_EXPENSE,
        id:"t5"
    })

})

test("should run truthy edit expense",function(){
    const result=editExpense({id:"t5",updates:{description:"Hello"}});
    expect(result).toEqual({
        type:EDIT_EXPENSE,
        id:"t5",
        updates:{
            description:"Hello"
        }
    })

})

test("should run truthy add expense",function(){
    const expenseData={
        description:"Rent",
        amount:"5000",
        notes:"Hello there!",
        createdAt:1000,
    }
    const result=addExpense(expenseData);
    expect(result).toEqual({
        type:ADD_EXPENSE,
       expense:{
           ...expenseData,
           id:expect.any(String)
       }
    })

})

test("should run default add expense",function(){
    
    const result=addExpense();
    expect(result).toEqual({
        type:ADD_EXPENSE,
       expense:{
        description:"",
        notes:"",
        amount:0,
        createdAt:0,
        id:expect.any(String)
       }
    })

})

// test("should run default add expense",function(){
//     const result=addExpense({description:"Hello",amount:"25"});
//     expect(result).toEqual({
//         type:EDIT_EXPENSE,
//         id:"t5",
//         updates:{
//             description:"Hello"
//         }
//     })

// })