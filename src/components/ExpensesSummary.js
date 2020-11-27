import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = '\u20B9'+ numeral(expenseTotal).format('0.00');
    return(
        <div>
            { 
                expenseCount > 0 && 
                    <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal}</h1>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);