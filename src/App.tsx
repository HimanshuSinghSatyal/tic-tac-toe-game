import './App.css'
import {useState} from "react";
import Bord from "./Bord";


export default function App() {
  const[ history, setHistory] = useState([Array(9).fill(null)]);
  
  const[currentMove, setCurrentMove]=useState(0);
  
  let currentSquares = history[currentMove];

  let isNext = currentMove % 2 === 0;
  
  function handlePlay(nextSquares) {
  const nextHistory= 
    [...history.slice(0, currentMove + 1), nextSquares];
   // console.log(nextHistory)
  //  [...history,nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    //setIsNext(!isNext);
  }

  const jumpTo =(move:number) =>{
    setCurrentMove(move);
   // setIsNext(move % 2 === 0);
  }

  const playAgain =() =>{
  setHistory([Array(9).fill(null)])
  setCurrentMove(0)
  }
  

  return (
  <div>
    <div>
      { history.map((squares,i) =>(
     i !== currentMove ? (<button key={i} onClick={() => jumpTo(i)} >{i} move 
        </button>) : 
      (<p key={i} onClick={() => jumpTo(i)} > You are at move #{i}  
      </p>)
      ))
      }
    </div>
      
  <Bord squares= {currentSquares} isNext={isNext} onPlay= {handlePlay} />


  <button  onClick={playAgain}>Play Again</button>
  </div>
    
  )
}