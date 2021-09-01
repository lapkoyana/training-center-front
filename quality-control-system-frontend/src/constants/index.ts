export const SET_LECTIONS = 'SET-LECTIONS';
export const SET_USER_LESSON = 'SET-USER-LESSON';
export const SET_CURRENT_LECTION = 'SET-CURRENT-LECTION';

export const SET_QUESTIONS = 'SET-QUESTIONS';

export const SET_ANSWERS = 'SET-ANSWERS';
export const SET_USERS = 'SET-USERS';

export const SET_IS_LOGGED_IN = 'SET-IS-LOGGED-IN'
export const SET_CURRENT_USER = 'SET-CURRENT-USER'

export const SET_FILE = 'SET-FILE'

export type LectionsType = {
    id?: number,
    topic: string
    dateOfClass: string
    lectureFile?: string
    signOfCompleteness: boolean
    completeness?: boolean
}

export type UsersType = {
    id: number
    username: string
}

export type AnswersType = {
    id: number,
    dateOfReply: string,
    content: string,
    question: string,
    user: number,
    lesson: number
}

export type QuestionsType = {
    id?: number,
    content: string
}

export type StudentAnswersType = {
    content: string
}

export type UserLessonsType = {
    userId: number,
    lessonId: number,
    signOfCompleteness: boolean
}

export type UserLoginType = {
    token: string,
    type: string,
    id: number,
    username: string
    roles: Array<String>
}

export type SetLectionsType = {
    type: typeof SET_LECTIONS,
    lections: Array<LectionsType>
}

export type SetCurrentLectionType = {
    type: typeof SET_CURRENT_LECTION,
    lection: LectionsType
}

export type SetUserLessonType = {
    type: typeof SET_USER_LESSON,
    userLessons: Array<UserLessonsType>
}

export type SetStudentAnswersType = {
    type: typeof SET_ANSWERS,
    answers: Array<StudentAnswersType>
}

export type SetAnswersType = {
    type: typeof SET_ANSWERS,
    answers: Array<AnswersType>
}

export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}

export type SetFileType = {
    type: typeof SET_FILE,
    file: string
}

export type SetQuestionsType = {
    type: typeof SET_QUESTIONS,
    questions: Array<QuestionsType>
}

export type SetCurrentUser = {
    type: typeof SET_CURRENT_USER,
    currentUser: UserLoginType
}

export type IIsLoggedIn = {
    type: typeof SET_IS_LOGGED_IN,
    isLoggedIn: boolean
}

export type IAnswersLect = {
    answers: Array<AnswersType>,
    users: Array<UsersType>,
    lections: Array<LectionsType>
}

export type IAuth = {
    isLoggedIn: boolean,
    currentUser: UserLoginType | null
}

export const initialAnswersLect: IAnswersLect = {
    answers: [],
    lections: [],
    users: []
}

let storedUser = localStorage.getItem("user")
let currentUser1 = null

if (typeof storedUser === 'string'){
    currentUser1 = JSON.parse(storedUser)
}

let initialAuth: IAuth = {
    isLoggedIn: false,
    currentUser: null
}

if (currentUser1) {
    initialAuth = {
        isLoggedIn: true, 
        currentUser: currentUser1
    }
} else {
    initialAuth = {
        isLoggedIn: false,
        currentUser: null
    }
}

export interface IInitialState {
    answersLect: IAnswersLect
    auth: IAuth
    lesson: {
        lections: Array<LectionsType>,
        currentLection: LectionsType
    }
    question: {
        questions: Array<QuestionsType>
    }
    students: {
        answers: Array<StudentAnswersType>,
        file: string | null
        lections: Array<LectionsType>,
        userLessons: Array<UserLessonsType>
    }
}

export const initialState: IInitialState = {
    answersLect: initialAnswersLect,
    auth: initialAuth,
    lesson: {
        lections: [],
        currentLection: {
            id: 0,
            topic: "",
            dateOfClass: "",
            lectureFile: "",
            signOfCompleteness: false
            
        }
    },
    question: {
        questions: []
    },
    students: {
        answers: [],
        file: null,
        lections: [],
        userLessons: []
    }
}