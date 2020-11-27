import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should show expenseCount and expenseTotal correctly for multiple expenses', () => {
    const expenseCount = 2;
    const expenseTotal = 10;
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expenseTotal={expenseTotal}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should show expenseCount and expenseTotal correctly for single expense', () => {
    const expenseCount = 1;
    const expenseTotal = 15.5;
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expenseTotal={expenseTotal}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should hide expenseCount and expenseTotal', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});