import React from 'react';
import QuizApp from './QuizApp';

const QuizEnd = (props) => {

    const [returnToStart, setReturnToStart] = React.useState(false);

    return(
        <>
        {
            returnToStart?
                <QuizApp/>
            :
            <div id="result-section">
                <p id="score-value">Your score: {props.score}/100</p><br/>
                <button id="return-btn" onClick={()=>setReturnToStart(true)}>Return to start</button>
            </div>
        }
        </>
    )
}

export default QuizEnd;