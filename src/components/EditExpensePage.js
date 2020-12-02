import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (updatedExpense) => {
        this.props.startEditExpense(this.props.expense.id,updatedExpense);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updatedExpense) => dispatch(startEditExpense(id,updatedExpense)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);