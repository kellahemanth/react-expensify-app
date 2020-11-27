import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expense', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('should add up single expense correctly', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toBe(450);
});

test('should add all expenses correctly', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(21450);
});
