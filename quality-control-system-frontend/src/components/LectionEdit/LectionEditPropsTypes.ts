import { LectionsType } from '../../constants'

export type StatePropsType = {
    currentLection: LectionsType
}

export type DispatchPropsType = {
    addOrUpdateLection: (currentMethod: string, formData: any, currentLection: LectionsType) => void,
}