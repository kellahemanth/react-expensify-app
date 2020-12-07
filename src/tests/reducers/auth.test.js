import authReducer from '../../reducers/auth';

test('should update uid in state in case of login', () => {
    const action = {
        type: 'LOGIN',
        uid: '90908767'
    };
    const result = authReducer(undefined, action);
    expect(result.uid).toEqual(action.uid);
});

test('should update uid in state in case of login', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = {
        uid: '909087676'
    }
    const result = authReducer(state, action);
    expect(result).toEqual({});
});