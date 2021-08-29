import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './IAnswers'
import { Answers } from './AnswersPL'
import { mapStateToProps, mapDispatchToProps } from './AnswersContainer'

export default connect<StatePropsType, DispatchPropsType>
    (mapStateToProps, mapDispatchToProps )(Answers);