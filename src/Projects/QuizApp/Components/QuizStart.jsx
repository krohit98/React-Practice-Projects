import React from 'react';
import CurrentQuestion from './CurrentQuestion';
import QuizEnd from './QuizEnd';

const QuizStart = (props) => {

    const [questionIndex, setQuestionIndex] = React.useState(0);
    let timerId = React.useRef(null);
    let score = React.useRef(0);

    function goToNextQuestion(scoreEarned){
        clearTimeout(timerId.current);
        score.current += scoreEarned;
        if(questionIndex <= 4){
            setTimeout(()=>{
                setQuestionIndex(prevQI => prevQI+1)
            },1000)
        }
    }

    React.useEffect(()=>{
        if(questionIndex <= 4){
            timerId.current = setTimeout(()=>{
                setQuestionIndex(prevQI => prevQI+1)
            },30000)
        }
        return ()=>clearTimeout(timerId.current)
    },[questionIndex])

    return(
        <>
            {   questionIndex <= 4?
                    props.quizData.length>0?
                        <CurrentQuestion 
                            current={props.quizData[questionIndex]} 
                            QI={questionIndex} 
                            goToNextQuestion={goToNextQuestion} 
                        />
                    :
                        ''
                :
                    <QuizEnd score={score.current}/>
            }
        </>
    )
}

export default QuizStart;