import React from "react";
import {NavLink} from 'react-router-dom'

const NavigationLink=(props)=>(
    <div>
    <NavLink to="/" exact activeClassName="is-active">Dashborad</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
</div>
)

export default NavigationLink;