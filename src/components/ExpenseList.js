import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Expenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? 
            (
                <p>No Expenses</p>
            ) : 
            (
                props.expenses.map((expense) => {
                    return (
                        <ExpenseListItem expense={expense} 
                            key={expense.id}
                        />
                    );
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: Expenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
