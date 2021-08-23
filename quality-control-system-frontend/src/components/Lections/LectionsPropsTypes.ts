import { LectionsType } from '../../redux/type'

export type StatePropsType = {
    lections: Array<LectionsType>
}

export type DispatchPropsType = {
    setLections: () => void,
    deleteLection: (lectionId: number) => void
    setCurrentLection: (lectionId: number) => void
}