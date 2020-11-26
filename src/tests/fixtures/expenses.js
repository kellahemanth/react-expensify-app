import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Gum',
        amount: 450,
        createdAt: 0,
        note: ''
    },
    {
        id: '2',
        description: 'Rent',
        amount: 19500,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: 'Every month'
    },
    {
        id: '3',
        description: 'Electricity',
        amount: 1500,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: ''
    }
];

export default expenses;