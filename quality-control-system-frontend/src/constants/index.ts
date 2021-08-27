export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER-FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN-FAIL";
export const LOGOUT = "LOGOUT";

export const SET_LECTIONS = 'SET-LECTIONS';
export const DELETE_LECTION = 'DELETE-LECTIONS';
export const ADD_LECTION = 'ADD-LECTION'
export const EDIT_LECTION = 'EDIT-LECTION';
export const SET_USER_LESSON = 'SET-USER-LESSON';
export const SET_CURRENT_LECTION = 'SET-CURRENT-LECTION';

export const SET_QUESTIONS = 'SET-QUESTIONS';
export const DELETE_QUESTION = 'DELETE-QUESTION';
export const ADD_QUESTION = 'ADD-QUESTION'
export const EDIT_QUESTION = 'EDIT-QUESTIONS'

export const ADD_ANSWERS = 'ADD-ANSWERS';
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
    userId: number,
    lessonId: number
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
export const setLectionsAction = (lections: Array<LectionsType>): SetLectionsType => ({
    type: SET_LECTIONS,
    lections
})

export type SetCurrentLectionType = {
    type: typeof SET_CURRENT_LECTION,
    lection: LectionsType
}
export const setCurrentLectionAction = (lection: LectionsType): SetCurrentLectionType => ({
    type: SET_CURRENT_LECTION,
    lection
})

export type SetUserLessonType = {
    type: typeof SET_USER_LESSON,
    userLessons: Array<UserLessonsType>
}
export const setUserLessonAction = (userLessons: Array<UserLessonsType>): SetUserLessonType => ({
    type: SET_USER_LESSON,
    userLessons
})

export type AddAnswersType = {
    type: typeof ADD_ANSWERS,
    answers: Array<StudentAnswersType>
}
export const addAnswersAction = (answers: Array<StudentAnswersType>): AddAnswersType => ({
    type: ADD_ANSWERS,
    answers
})

export type SetStudentAnswersType = {
    type: typeof SET_ANSWERS,
    answers: Array<StudentAnswersType>
}
export const setStudentAnswersAction = (answers: Array<StudentAnswersType>): SetStudentAnswersType => ({
    type: SET_ANSWERS,
    answers
})

export type SetAnswersType = {
    type: typeof SET_ANSWERS,
    answers: Array<AnswersType>
}
export const setAnswersAction = (answers: Array<AnswersType>): SetAnswersType => ({
    type: SET_ANSWERS,
    answers
})

export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}
export const setUsersAction = (users: Array<UsersType>): SetUsersType => ({
    type: SET_USERS,
    users
})

export type SetFileType = {
    type: typeof SET_FILE,
    file: string
}
export const setFileAction = (file: string): SetFileType => ({
    type: SET_FILE,
    file
})

export type SetQuestionsType = {
    type: typeof SET_QUESTIONS,
    questions: Array<QuestionsType>
}
export const setQuestionsAction = (questions: Array<QuestionsType>): SetQuestionsType => ({
    type: SET_QUESTIONS,
    questions
})

export type AddQuestionsType = {
    type: typeof ADD_QUESTION,
    question: QuestionsType
}
export const addQuestionsAction = (question: QuestionsType): AddQuestionsType => ({
    type: ADD_QUESTION,
    question
})

export type EditQuestionsType = {
    type: typeof EDIT_QUESTION,
    question: QuestionsType
}
export const editQuestionsAction = (question: QuestionsType): EditQuestionsType => ({
    type: EDIT_QUESTION,
    question
})

export type DeleteQuestionsType = {
    type: typeof DELETE_QUESTION,
    questionId: number | undefined
}
export const deleteQuestionsAction = (questionId: number | undefined): DeleteQuestionsType => ({
    type: DELETE_QUESTION,
    questionId
})



export type DeleteLectionType = {
    type: typeof DELETE_LECTION,
    lectionId: number | undefined
}
export const deleteLectionAction = (lectionId: number | undefined): DeleteLectionType => ({
    type: DELETE_LECTION,
    lectionId
})
export type EditLectionType = {
    type: typeof EDIT_LECTION,
    lection: LectionsType
}
export const editLectionAction = (lection: LectionsType): EditLectionType => ({
    type: EDIT_LECTION,
    lection
})
export type AddLectionType = {
    type: typeof ADD_LECTION,
    lection: LectionsType
}
export const addLectionAction = (lection: LectionsType): AddLectionType => ({
    type: ADD_LECTION,
    lection
})

export type SetCurrentUser = {
    type: typeof SET_CURRENT_USER,
    payload: UserLoginType
}
//здесь не только setcurrentuser, тут еще и isLoggedIn = true
export const loginAction = (payload: UserLoginType): SetCurrentUser => ({
    type: SET_CURRENT_USER,
    payload
})

export type IIsLoggedIn = {
    type: typeof SET_IS_LOGGED_IN,
    payload: boolean
}
export const setIsLoggedIn = (payload: boolean): IIsLoggedIn => ({
    type: SET_IS_LOGGED_IN,
    payload
})

export type RegisterSuccessType = {type: typeof REGISTER_SUCCESS}
export const registerSuccessAction = (): RegisterSuccessType => ({type: REGISTER_SUCCESS})

export type RegisterFailType = {type: typeof REGISTER_FAIL}
export const registerFailAction = (): RegisterFailType => ({type: REGISTER_FAIL})

export type LogoutType = {type: typeof LOGOUT}
export const logoutAction = (): LogoutType => ({type: LOGOUT})

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
// нзнзнзнзнзнзнзн!!!
if (currentUser1) {
    initialAuth = {
        isLoggedIn: true, 
        currentUser: {
            token: "",
            type: "",
            id: 0,
            username: "",
            roles: []
        }
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
        file: string | undefined
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
        file: undefined,
        lections: [],
        userLessons: []
    }
}