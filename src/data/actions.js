
//match up the action types with the action symbols 
export const UPDATE_INPUT = Symbol("UPDATE_INPUT");

export const updateInput = value => ({
    type: UPDATE_INPUT,
    value,
});

export const ADD_NAME = Symbol("ADD_NAME");

export const addName = input => ({
    type: ADD_NAME,
    input,
});