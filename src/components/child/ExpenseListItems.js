import React from 'react';
import {Link} from 'react-router-dom';
import moment from "moment";
import numeral from "numeral";

const ExpenseListItems=(props)=>(<div>
   <Link to={`/edit/${props.id}`}>
        <h6>{props.description}</h6>
        </Link>
        
        <div>{`₹ ${numeral(props.amount/100).format('0,0.00')}`} - {moment(props.createdAt).format("DD/MM/YYYY")}</div>
        
    </div>
)

export default ExpenseListItems;