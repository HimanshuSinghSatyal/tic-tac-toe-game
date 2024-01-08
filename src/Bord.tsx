import {useState} from "react";
import Square from "./Square";


export default function Bord() {
  const[ squares, SetSquares] = useState(Array(9).fill(null));
  const[isNext, setIsNext]
= useState(true);
  
  const caluclateWinner = (square:any ) =>{ 
    console.log("squre", square)
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for (let[a,b,c] of lines){
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
          return square[a];
        }
      }
      return null;
    }

  
  const handleClick = (i:number) => {
    const nextSquares= 
    [...squares]; 
    if(nextSquares[i] || caluclateWinner(squares) ){
      return;
    }
    
    if(isNext){
      nextSquares[i] = "X"; 
    }else{
      nextSquares[i] ="O";   
    }
    setIsNext(!isNext);
    SetSquares(nextSquares);
  }

  let status: string;
  let result = caluclateWinner(squares);  
  if(result){
  status = "winner is  " + result
  }else{
  status = " player is" +(
   isNext ? "X" : "O")
  }

  return (
    <div className= ""> 
      <h1> {status}</h1>
      <div>
      <Square value= {squares[0]} onclick={() => handleClick(0)}/>
      <Square value= {squares[1]} 
        onclick={() => handleClick(1)}/>
      <Square value= {squares[2]}
        onclick={() => handleClick(2)}/>
      </div>
      
      <div>
      <Square value={squares[3]}
        onclick={() => handleClick(3)}/>  
      <Square value= {squares[4]}
        onclick={() => handleClick(4)}/>
      <Square value={squares[5]}
        onclick={() => handleClick(5)}/>
      </div>
      
      <div>
      <Square value={squares[6]} 
        onclick={() => handleClick(6)}/>
      <Square value= {squares[7]} 
        onclick={() => handleClick(7)}/>
      <Square value= {squares[8]} 
        onclick={() => handleClick(8)}/>
      </div>
    </div>
  );
}