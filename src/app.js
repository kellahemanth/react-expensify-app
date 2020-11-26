import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense( { description: "Water Bill", amount: 100, createdAt: 1000 } ));
store.dispatch(addExpense( { description: "Gas Bill", amount: 250, createdAt: -1000, note: 'Every month' } ));
store.dispatch(addExpense( { description: "Rent", amount: 19100, createdAt: -2000 } ));

// setTimeout(() => {
//     store.dispatch(setTextFilter('Water'));
// }, 3000);

const state = store.getState();
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));