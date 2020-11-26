import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow
        (
            <ExpenseListFilters 
                setTextFilter = {setTextFilter}
                sortByDate = {sortByDate}
                sortByAmount = {sortByAmount}
                setStartDate = {setStartDate}
                setEndDate = {setEndDate}
                filters = {filters}
            />
        )
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters : altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = altFilters.text;
    wrapper.find('input').simulate('change', {
        target : { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortBy Date', () => {
    const value = filters.sortBy;
    wrapper.setProps({
        filters : altFilters
    });
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort By Amount', () => {
    const value = altFilters.sortBy;
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const focused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
});