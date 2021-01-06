import {createStore,combineReducers} from 'redux';
import expensesReducer from './reducers/expensesReducer';
import filterReducer from './reducers/filterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(){
    const reducers=combineReducers({
        filter:filterReducer,
        expenses:expensesReducer
    })
    return createStore(reducers,composeEnhancers());
}




export default configureStore;