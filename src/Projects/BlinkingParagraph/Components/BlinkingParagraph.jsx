import React from 'react';
import { getParagraph } from '../service';

const BlinkingPraragraph = () => {

    const [data, setData] = React.useState([])

    function generateRandomColor(){
        let letters = "123456789ABCDEF"
        let color = "#"

        for(let i=0;i<6;i++){
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color;
    }

    function setRandomColor(){
        let words = document.getElementsByClassName("word")

        for(let word of words){
            word.style.color = generateRandomColor();
        }
    }

    React.useEffect(()=>{
        setData(()=>{
            return getParagraph().split(" ")
        })
    },[])

    React.useEffect(()=>{
        setRandomColor()
        let timerId = setInterval(()=>setRandomColor(), 1000);
        return ()=>clearTimeout(timerId);
    })

    return(
        <div id="para">
            {
                data.map(word => {
                    return(
                        <span className="word">{word} </span>
                    )
                })
            }
        </div>
    )
}

export default BlinkingPraragraph;