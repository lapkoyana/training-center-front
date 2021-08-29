import { LectionsType } from '../../constants'

export type StatePropsType = {
    lections: Array<LectionsType>
}

export type DispatchPropsType = {
    setLections: (lections: Array<LectionsType>) => void,
    setCurrentLection: (lections: LectionsType) => void
}