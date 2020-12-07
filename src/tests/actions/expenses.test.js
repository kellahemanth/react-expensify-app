import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense,
    startEditExpense,
    editExpense, 
    startRemoveExpense,
    removeExpense, 
    startSetExpenses,
    setExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "ThisismyTestUID";
const defaultAuthState = {auth: {uid} };

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, createdAt, note}) => {
        expensesData[id] = { description, amount, createdAt, note };
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should return remove expense action object', () => {
    const action = removeExpense({ id: '123asd' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});


test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense(expenses[1])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        });
        return database.ref(`users/${uid}/expenses/${expenses[1].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should update expense in database', (done) => {
    const store = createMockStore(defaultAuthState);
    const updates = {
        description: 'updated description',
        amount: 9999,
        note: 'updated note'
    };
    store.dispatch(startEditExpense(expenses[2].id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[2].id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value');
    }).then((snapshot) => {
        const response = {
            ...snapshot.val(),
            id: snapshot.key
        }
        expect(response).toEqual({
            ...expenses[2],
            description: 'updated description',
            amount: 9999,
            note: 'updated note'
        });
        done();
    });
});

test('should return add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense object to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        createdAt: 1000,
        note: 'It is beter'
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {   
            id: expect.any(String),
            ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});

test('should add expense object with default values to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {};
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {   
                id: expect.any(String),
                description: '',
                amount: 0,
                createdAt: 0,
                note: ''
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        });
        done();
    }); 
});

test('should setup set expenses action object', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});