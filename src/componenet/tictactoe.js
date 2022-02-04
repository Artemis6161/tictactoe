import React,{ useEffect, useState } from 'react'
import "./tic.css"
import Pattern from "./pattern"
const init = ['','','','','','','','',''];
 function Tictactoe() {
    const [board, setBoard] = useState([...init])
    const [player, setPlayer] = useState("x")
    const[lIdx,setLidx] = useState(-1);
    const changeTile = (idx) =>{
      if (board[idx] !=="") return;
      setLidx(idx);
    setBoard((board) =>{
        return board.map((val,i) =>{
        if (i === idx) return player;
        return val;
      })
    })
    setPlayer(player === "x" ? "o":"x");
  
};
const checkWin = () => {
  if(lIdx < 0) return;
  // console.log(player);
  const checkArr = Pattern[lIdx];
  const prevPlayer = player === "x" ? "o":"x";
  checkArr.forEach((arr) =>{
    if(
      board[arr[0]]=== prevPlayer && 
      board[arr[1]]=== prevPlayer && 
      board[arr[2]]=== prevPlayer)
      {
    alert(`${prevPlayer} won the game`);
    reset();
  }
})
}
 
 const reset = () =>{
  setBoard([...init])
  setPlayer("x");
  setLidx(-1);
 }

useEffect(() =>{
  checkWin();
  },[board]);

  return (
    <>
    <p>current player is : {player}</p>
    <div className="board">
        {board.map((sq, i) => {
            return( <div className="border_titles" onClick={() => changeTile(i)}>{sq}</div>
        )
        })}
      
     
      </div>
      
      <p style={{textAlign: 'center'}}>
      <button onClick={reset}>Reset</button> 
      </p>
      </>
  )}

export default Tictactoe

