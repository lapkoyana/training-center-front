import { SET_MESSAGE, CLEAR_MESSAGE } from "../type";

const initialState = {};

export default function (state = initialState, actions) {
    const { type, payload } = {};

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };
        case CLEAR_MESSAGE:
            return { message: "" };
        default:
            return state;
    }
}