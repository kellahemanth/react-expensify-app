import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const now = moment();
// console.log(now);
// console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    changeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    changeNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    changeAmount = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d{0,10}(\.\d{0,2})?$/)){
            this.setState(() => ({amount})); 
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
           this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => this.setState(() => ({calendarFocused: focused}));
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({
                error: 'Make sure Description and Amount are not empty!'
            }));
        }else{
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        autoFocus
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.changeDescription}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.changeAmount}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        displayFormat='MMM Do, YYYY'
                    />
                    <textarea
                        placeholder="Add a note(optional)"
                        value={this.state.note}
                        onChange={this.changeNote}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
}