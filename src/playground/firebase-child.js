let expenses = [];
const database = firebase.database();

database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

//logs once all expenses by default
database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('value', (snapshot) => {
        expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }, (error) => {
        console.log('Unable to fetch', error);
    });


database.ref('expenses')
    .push({
        description: 'Gum',
        amount: 450,
        createdAt: 0,
        note: ''
    });
database.ref('expenses')
    .push({
        description: 'Rent',
        amount: 19500,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: 'Every month'
    });
database.ref('expenses')
    .push({
        description: 'Electricity',
        amount: 1500,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: ''
    });
