import Square from "./Square";
import {calculateWinner} from "./calculateWinner";


export default function Bord({squares,isNext, onPlay}) {
   
  const handleClick = (i:number) => {
    const nextSquares= 
    [...squares]; 
    if(nextSquares[i] || calculateWinner(squares) ){
      return;
    }
    
    if(isNext){
      nextSquares[i] = "X"; 
    }else{
      nextSquares[i] ="O";   
    }
    onPlay(nextSquares)
    //setIsNext(!isNext);
    //setSquares(nextSquares);
  }

  let status: string;
  let result = calculateWinner(squares);  
  
  if(squares.every(s => s !== null && !result)){
    status = "draw"
  }else if( result ){
  status = "winner is  " + result
  }else{
  status = " player is" +(
   isNext ? "X" : "O")
  }
  
  

  return (
    <div className= ""> 
      <div> {status}</div>
        <div style={{
      "display":"inline-grid",
      "gridTemplateColumns": "auto auto auto",
  "backgroundColor": "#2196F3",
     "padding": "5px"}} >
        {squares.map((s,i) =>
      <Square key={i} value= {s} onclick={() => handleClick(i)}/>
      )}
        </div>
    </div>
  );
}