const SET_MESSAGE = "SET_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
});

export const CLEAR_MESSAGE = () => ({
    type: CLEAR_MESSAGE
});