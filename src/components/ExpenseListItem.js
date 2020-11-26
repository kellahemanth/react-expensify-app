import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <h3><Link to={`edit/${props.expense.id}`}>{props.expense.description}</Link></h3>
        <p>Amount: {props.expense.amount}</p>
        <p>Created At: {props.expense.createdAt}</p>
    </div>
);

export default ExpenseListItem;