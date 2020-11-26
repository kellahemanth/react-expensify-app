import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should return text filter text action object', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'Rent'
    });
});

test('should return text filter text action object with default values', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: ''
    });
});

test('should return sortby amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('should return sortby date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('should return start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should return end date action object', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});

//const add = (a,b) => a+b;
// const greet = (name) => `Hello ${name}`;

// test('add 2 numbers', () => {
//     const res = add(3,5);
//     expect(res).toBe(8);
// });

// test('Greeting to Admin', () => {
//     const msg = greet('Hemanth');
//     expect(msg).toBe('Hello Hemanth');
// });