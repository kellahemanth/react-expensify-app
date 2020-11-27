import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        <p>Amount: {'\u20B9'+numeral(props.expense.amount).format('0.00')}</p>
        <p>Created: {moment(props.expense.createdAt).format('MMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;