import React from 'react';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

test('should return action object after login', () => {
    const uid = '90909898767'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should return action object for logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});