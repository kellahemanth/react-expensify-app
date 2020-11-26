import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should return default filter values', () => {
    const result = filtersReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should return sort by value as amount', () => {
    const result = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' });
    expect(result.sortBy).toBe('amount');
});

test('should return sort by value as date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = filtersReducer(currentState, { type: 'SORT_BY_DATE', sortBy: 'date' });
    expect(result.sortBy).toBe('date');
});

test('should return state with updated filter text value', () => {
    const result = filtersReducer(undefined, { type: 'SET_FILTER_TEXT', text: 'rent'});
    expect(result.text).toBe('rent');
});

test('should return state with updated filter start date value', () => {
    const result = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('year')});
    expect(result.startDate.valueOf()).toBe(moment().startOf('year').valueOf());
});

test('should return state with updated filter end date value', () => {
    const result = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('year')});
    expect(result.endDate.valueOf()).toBe(moment().endOf('year').valueOf());
});