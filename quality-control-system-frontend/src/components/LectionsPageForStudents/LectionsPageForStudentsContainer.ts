import { setLections } from '../../actions/lesson'
import { setUserLesson, setLessonFile } from '../../actions/student'
import { LectionsType, UserLessonsType } from '../../constants'
import { StatePropsType, DispatchPropsType } from './ILectionsPageForStudents'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        lections: state.qcsApp.student.lections,
        userLessons: state.qcsApp.student.userLessons,
        file: state.qcsApp.student.file
    }
}

export const mapDispatchToProps = (dispatch: any): DispatchPropsType => ({
    setLections: (lections: Array<LectionsType>) => dispatch(setLections(lections)),
    setUserLessons: (userLessons: Array<UserLessonsType>) => dispatch(setUserLesson(userLessons)),
    setLessonFile: (filename: string | undefined) => dispatch(setLessonFile(filename))
})