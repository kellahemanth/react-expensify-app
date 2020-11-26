import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should return remove expense action object', () => {
    const action = removeExpense({ id: '123asd' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});

test('should return edit expense action object', () => {
    const action = editExpense('123asd', { 
        description: 'updated',
        amount: 1000,
        note: 'qwerty'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            description: 'updated',
            amount: 1000,
            note: 'qwerty'
        }
    });
});

test('should return add expense action object', () => {
    const action = addExpense({
        description: 'Adding',
        amount: 1500,
        note: 'Hello world',
        createdAt: 1250
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Adding',
            amount: 1500,
            note: 'Hello world',
            createdAt: 1250
        }
    });
});

test('should return add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    });
});