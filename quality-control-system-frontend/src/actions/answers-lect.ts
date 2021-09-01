import { LectionsType, AnswersType, UsersType } from "../constants/index";
import { SET_ANSWERS, SET_LECTIONS, SET_USERS } from "../constants/index";

export const setLections = (lections: Array<LectionsType>) => {
    return {
        type: SET_LECTIONS,
        lections
    }
};

export const setAnswers = (answers: Array<AnswersType>) => {
    return {
        type: SET_ANSWERS,
        answers
    }
};

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users
    }
};