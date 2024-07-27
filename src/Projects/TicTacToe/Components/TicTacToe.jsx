import { useState } from "react";
import "../style.css";

const TicTacToe = () => {

    const [blocks, setBlocks] = useState(Array(9).fill(null));
    const [isTurnX, setTurnX] = useState(true);
    const [currentStatus, setCurrentStatus] = useState("Player 1 to start the match!");
    const [winStatus, setWinStatus] = useState(false);

    function markBlock(index){
        let updatedBlocks = blocks;

        if(isTurnX) updatedBlocks[index] = "X";
        else updatedBlocks[index] = "O";
        setBlocks(updatedBlocks);
        let winStatus = checkWin(updatedBlocks);
        if(winStatus) return;
        isTurnX ? setCurrentStatus("Player 2's turn") : setCurrentStatus("Player 1's turn");
        setTurnX(!isTurnX);
    }

    function reset(){
        setBlocks(Array(9).fill(null));
        setTurnX(true);
        setCurrentStatus("Player 1 to start the match!")
        setWinStatus(false);
    }

    function checkWin(blocks){
        let winStatus = true;
        if(blocks[0] && blocks[0]===blocks[1] && blocks[1]===blocks[2]){
            blocks[0] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[3] && blocks[3]===blocks[4] && blocks[4]===blocks[5]){
            blocks[3] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[6] && blocks[6]===blocks[7] && blocks[7]===blocks[8]){
            blocks[6] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[0] && blocks[0]===blocks[3] && blocks[3]===blocks[6]){
            blocks[0] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[1] && blocks[1]===blocks[4] && blocks[4]===blocks[7]){
            blocks[1] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[2] && blocks[2]===blocks[5] && blocks[5]===blocks[8]){
            blocks[2] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[0] && blocks[0]===blocks[4] && blocks[4]===blocks[8]){
            blocks[0] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(blocks[2] && blocks[2]===blocks[4] && blocks[4]===blocks[6]){
            blocks[2] === "X" ? setCurrentStatus("Player 1 wins!!!") : setCurrentStatus("Player 2 wins!!!");
        }
        else if(!blocks.includes(null)){
            setCurrentStatus("Its a draw!");
        }
        else winStatus = false;

        if(winStatus) setWinStatus(winStatus);
        return winStatus;
    }

    return(
        <div id="ticTacToe">
             <p id='status'>{currentStatus}</p>
             <div id='board'>
                {
                    blocks.map((block,index) => {
                        return(
                            <button key={index} disabled={winStatus || Boolean(block)} onClick={()=>markBlock(index)} className="block">{block}</button>
                        )
                    })
                }
             </div>
             <button id="resetBtn" onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;