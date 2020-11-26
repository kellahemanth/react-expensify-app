import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should return default expenses', () => {
    const result = expensesReducer(undefined, { type: '@@INIT'} );
    expect(result).toEqual([]);
});

test('should return added expenses', () => {
    const expense = {
        id: 1,
        description: 'rent',
        note: '',
        amount: 1400,
        createdAt: 0
    };
    const result = expensesReducer(undefined, 
        { 
            type: 'ADD_EXPENSE', 
            expense
        });
    expect(result[0]).toEqual(expense);
});

test('should remove expenses based on id and return existing', () => {
    const result = expensesReducer(expenses, 
        { 
            type: 'REMOVE_EXPENSE', 
            id: expenses[0].id
        });
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expenses with mismatching ids', () => {
    const result = expensesReducer(expenses, 
        { 
            type: 'REMOVE_EXPENSE', 
            id: '100'
        });
    expect(result).toEqual(expenses);
});

test('should update expenses based on id', () => {
    const updates = {
        description: 'coffee',
        note: 'new',
        amount: '100',
        createdAt: 1000
    }
    const result = expensesReducer(expenses, 
        { 
            type: 'EDIT_EXPENSE', 
            id: expenses[0].id,
            updates
        });
    expect(result[0]).toEqual( { ...updates, id:'1' } );
});

test('should not update expenses if id not found', () => {
    const updates = {
        description: 'coffee',
        note: 'new',
        amount: '100',
        createdAt: 1000
    }
    const result = expensesReducer(expenses, 
        { 
            type: 'EDIT_EXPENSE', 
            id: '120',
            updates
        });
    expect(result).toEqual(expenses);
});

