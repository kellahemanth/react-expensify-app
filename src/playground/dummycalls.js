store.dispatch(addExpense( { description: "Water Bill", amount: 100, createdAt: 1000 } ));
store.dispatch(addExpense( { description: "Gas Bill", amount: 250, createdAt: -1000, note: 'Every month' } ));
store.dispatch(addExpense( { description: "Rent", amount: 19100, createdAt: -2000 } ));

// setTimeout(() => {
//     store.dispatch(setTextFilter('Water'));
// }, 3000);

const state = store.getState();
console.log(store.getState());