import React from 'react'

const Questions = (props) => {
    return <div>
        {props.questions.map(q => <div key={q.id}>
            <div>
                {q.content}
            </div>
            <div>
                Кнопочки всякие
            </div>
        </div>)}
    </div>
}

export default Questions;