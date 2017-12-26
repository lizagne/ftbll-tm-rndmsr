import { UPDATE_INPUT, ADD_NAME, DELETE_NAME } from './constants';

export const updateInput = value => ({
    type: UPDATE_INPUT,
    value,
});


export const addName = input => ({
    type: ADD_NAME,
    input,
});


export const deletePlayer = (id) => ({
    type: DELETE_NAME,
    id,
});