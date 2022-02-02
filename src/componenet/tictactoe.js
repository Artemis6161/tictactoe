import React,{ useEffect, useState } from 'react'
import "./tic.css"
import Pattern from "./pattern"

 function Tictactoe() {
    const [board, setBoard] = useState(['','','','','','','','',''])
    const [player, setPlayer] = useState("x")
    const[lIdx,setLidx] = useState(-1);
    const changeTile = (idx) =>{
      if (board[idx] !=='') return;
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
  const checkArr = Pattern[lIdx];
  const prevPlayer = player === "x" ? "o":"x";
  checkArr.forEach((arr) =>{
    if(board[arr[0]]=== prevPlayer && board[arr[1]] && board[arr[2]])
    {alert(`${prevPlayer} won the game`);
  }
})
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
      </>
  )}

export default Tictactoe

