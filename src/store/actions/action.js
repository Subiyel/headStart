import * as types from './types';

export function login() { console.log("in action");
    return {
        type: types.LOGIN
    };
}
