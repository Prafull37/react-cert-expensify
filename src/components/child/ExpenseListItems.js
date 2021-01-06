import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItems=(props)=>(<div>
   <Link to={`/edit/${props.id}`}>
        <h6>{props.description}</h6>
        </Link>
        
        <div>{props.amount} - {props.createdAt}</div>
        
    </div>
)

export default ExpenseListItems;