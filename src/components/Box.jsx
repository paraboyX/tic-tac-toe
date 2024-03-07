import { useState } from "react";
import Pieces from "./Pieces";

const Box = () => {
  const [val, setVal] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  function handleClick(index) {
    turn ? console.log("X", index) : console.log("0", index);
    setTurn(!turn);
    console.log(turn);
  }

  return (
    <>
      <div className="">
        <div className="flex justify-center text-center">
          <Pieces onButtonClick={() => handleClick(0)} nums={val[0]} />
          <Pieces onButtonClick={() => handleClick(1)} nums={val[1]} />
          <Pieces onButtonClick={() => handleClick(2)} nums={val[2]} />
        </div>
        <div className="flex justify-center text-center">
          <Pieces onButtonClick={() => handleClick(3)} nums={val[3]} />
          <Pieces onButtonClick={() => handleClick(4)} nums={val[4]} />
          <Pieces onButtonClick={() => handleClick(5)} nums={val[5]} />
        </div>
        <div className="flex justify-center text-center">
          <Pieces onButtonClick={() => handleClick(6)} nums={val[6]} />
          <Pieces onButtonClick={() => handleClick(7)} nums={val[7]} />
          <Pieces onButtonClick={() => handleClick(8)} nums={val[8]} />
        </div>
      </div>
    </>
  );
};

export default Box;
