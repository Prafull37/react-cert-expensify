import React from "react";
import {Switch,Route} from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter=(props)=>(
    <Switch>
    <Route exact path="/" component={ExpenseDashboard}/>
    <Route path="/create" component={AddExpense}/>
    <Route path="/edit/:id" component={EditExpense}/>
    <Route  path="/help" component={Help}/>
    <Route path="*" component={NotFound} />
</Switch>
)

export default AppRouter;