import React from 'react';

const CurrentQuestion = (props) => {

    const [counter, setCounter] = React.useState(30);
    let intervalId = React.useRef(null);
    let answered = false;

    function selectAnswer(e){
        if(!answered){
            answered = true;
            let score = 0;
            if(e.target.localName === 'li'){
                if(String(e.target.dataset.value) === String(props.current.Answer)){
                    e.target.classList.add("selected-correct");
                    score = 20;
                }
                else{
                    e.target.classList.add("selected-wrong");
                    document.querySelector(`li[data-value='${props.current.Answer}']`).classList.add("correct-answer");
                }
            }
            document.getElementsByClassName("timer")[0].classList.add("stopped-timer")
            clearInterval(intervalId.current);
            props.goToNextQuestion(score);
        }
    }

    function startCounter(){
        setCounter(30);
        intervalId.current = setInterval(()=>{
                setCounter(counter=>counter-1)
        },1000)
        return intervalId;
    }

    React.useEffect(()=>{
        Array.from(document.getElementsByClassName("option")).forEach(option => option.classList.remove('selected-correct','selected-wrong','correct-answer'))
        document.getElementsByClassName("timer")[0].classList.remove("stopped-timer")
        let intervalId = startCounter();
        return ()=>clearInterval(intervalId.current)
    },[props])

    return(
        <div id="question-block" className='main-section'>
            <div id="question-header">
                <p>Question {props.QI+1}</p>
                <p className="timer">00:{counter<10?`0${counter}`:counter}</p>
            </div>
            <p id="question">{props.current.Question}</p>
            <ul id="options-wrapper" onClick = {(e)=>selectAnswer(e)}>
                <li className='option' data-value={props.current.Options[1]}>{props.current.Options[1]}</li>
                <li className='option' data-value={props.current.Options[2]}>{props.current.Options[2]}</li>
                <li className='option' data-value={props.current.Options[3]}>{props.current.Options[3]}</li>
                <li className='option' data-value={props.current.Options[4]}>{props.current.Options[4]}</li>
            </ul>
        </div>
    )
}

export default CurrentQuestion;

