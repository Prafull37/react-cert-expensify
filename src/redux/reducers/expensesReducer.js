import {ADD_EXPENSE,EDIT_EXPENSE,REMOVE_EXPENSE} from '../actions/expenseActionConstant';


export const expenseState=[]

const expensesReducer=(state=expenseState,action)=>{

    switch(action.type){
        case ADD_EXPENSE:
            return [
                ...state,
                action.expense
            ];
        case REMOVE_EXPENSE:
            return state.filter(({id})=>id!==action.id);
        case EDIT_EXPENSE:
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {...expense,...action.updates};
                }
                return expense;
            })
        default:
            return state;
    }
}

export default expensesReducer;