import { LectionsType,
        SET_LECTIONS,
        SET_CURRENT_LECTION } from './../constants/index'

export const setLections = (lections: Array<LectionsType>) => {
    return {
        type: SET_LECTIONS,
        lections
    }
}

export const setCurrentLection = (lection: LectionsType) => {
    return {
        type: SET_CURRENT_LECTION,
        lection
    }
}