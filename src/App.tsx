import './App.css'
import {useState} from "react";

import Bord from "./Bord";


export default function App() {
  const[ history, setHistory] = useState([Array(9).fill(null)]);
  const[isNext, setIsNext]
  = useState(true);
  const[currentMove, setCurrentMove]=useState(0);
  
  let currentSquares= history[currentMove];
  
  function handlePlay(nextSquares) {
  const nextHistory= 
    [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory)
  //  [...history,nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext(!isNext);
  }

  const jumpTo =(move:number) =>{
    setCurrentMove(move);
    setIsNext(move % 2 === 0);
  }
  

  return (
  <div>
    <div>
      { history.map((squares,i) =>(
        <button onClick={() => jumpTo(i)} >{i} move 
        </button>
      ))
      }
    </div>
      
  <Bord squares= {currentSquares} isNext={isNext} onPlay= {handlePlay} />
         
  </div>
  )
}