import { useState } from "react";
import Pieces from "./Pieces";

const Box = () => {
  const [val, setVal] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (val[a] && val[a] === val[b] && val[a] === val[c]) {
        return val[a];
      }
    }

    return false;
  };

  function handleClick(index) {
    const newVal = [...val];
    if (newVal[index] === null) {
      newVal[index] = turn ? "X" : "0";
      setVal(newVal);
      setTurn(!turn);
    } else alert("This spot is already occupied");
  }

  const winner = calculateWinner();

  const playAgain = () => {
    const newVal = Array(9).fill(null);
    setVal(newVal); 
  };

  return winner ? (
    <>
      <h1> {winner} wins</h1>
      <button onClick={() => playAgain()}>Play Again</button>
    </>
  ) : (
    <>
      <h1>Player {turn ? "X" : "0"} turn!</h1>
      <button onClick={() => playAgain()}>Play Again</button>
      <>
        <div className="">
          <div className="flex justify-center text-center">
            <Pieces onClick={() => handleClick(0)} nums={val[0]} />
            <Pieces onClick={() => handleClick(1)} nums={val[1]} />
            <Pieces onClick={() => handleClick(2)} nums={val[2]} />
          </div>
          <div className="flex justify-center text-center">
            <Pieces onClick={() => handleClick(3)} nums={val[3]} />
            <Pieces onClick={() => handleClick(4)} nums={val[4]} />
            <Pieces onClick={() => handleClick(5)} nums={val[5]} />
          </div>
          <div className="flex justify-center text-center">
            <Pieces onClick={() => handleClick(6)} nums={val[6]} />
            <Pieces onClick={() => handleClick(7)} nums={val[7]} />
            <Pieces onClick={() => handleClick(8)} nums={val[8]} />
          </div>
        </div>
      </>
    </>
  );
};

export default Box;
