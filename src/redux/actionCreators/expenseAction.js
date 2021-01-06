import {ADD_EXPENSE,EDIT_EXPENSE,REMOVE_EXPENSE} from '../actions/expenseActionConstant';
import {v4 as uuid} from 'uuid';


export const addExpense=({description="",amount=0,notes="",createdAt=0}={})=>{
    return {
        type:ADD_EXPENSE,
        expense:{
            id:uuid(),
            description,
            amount,
            notes,
            createdAt
        }
    }
}

export const removeExpense=(id)=>{
    return {
        type:REMOVE_EXPENSE,
        id
    }
}

export const editExpense=({id,updates})=>{
    return {
        type:EDIT_EXPENSE,
        id,
        updates
    }
}