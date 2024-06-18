import React from 'react';
import * as service from '../service';
import QuizStart from './QuizStart';
import '../style.css'

const QuizApp = () => {

    const [quizData, setQuizData] = React.useState([])
    const [quizStarted, setQuizStarted] = React.useState(false)

    async function fetchQuizData(){
        setQuizData(await service.getQuizData())
    }

    React.useEffect(()=>{
        fetchQuizData();
    },[])

    return(
        <div id="quiz-app">
            {quizStarted?
                <QuizStart quizData={quizData}/>
            :
                <div className="main-section">
                    <p id="title">Test your general knowledge</p>
                    <p className="instructions">There are 5 questions.</p>
                    <p className="instructions">You have 30 seconds to answer each question.</p>
                    <p className="instructions">For each correct answer you get <b>+20</b> points.</p>
                    <button onClick={()=>setQuizStarted(true)}>Start Quiz</button>
                </div>
            }
        </div>
    )
}

export default QuizApp;