import React, { useState } from "react";
import Square from "./../Square/Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  // console.log(square, "state");
  const [whosTurn, setwhosTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        square[a] !== null &&
        square[a] === square[b] &&
        square[a] === square[c]
      ) {
        return square[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    // console.log(index, "click");
    if (square[index] !== null) {
      return;
    }
    const copySquare = [...square];
    copySquare[index] = whosTurn ? "X" : "O";
    setSquare(copySquare);
    setwhosTurn(!whosTurn);
  };

  const handleButton = () => {
    setSquare(Array(9).fill(null));
  };

  return (
    <div className="board">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button className="play-button" onClick={handleButton}>Play Again</button>
        </>
      ) : (
        <>
          <h4>Player {whosTurn ? "X" : "O"} its your turn now</h4>
          <div className="row">
            <Square onClickFun={() => handleClick(0)} value={square[0]} />
            <Square onClickFun={() => handleClick(1)} value={square[1]} />
            <Square onClickFun={() => handleClick(2)} value={square[2]} />
          </div>
          <div className="row">
            <Square onClickFun={() => handleClick(3)} value={square[3]} />
            <Square onClickFun={() => handleClick(4)} value={square[4]} />
            <Square onClickFun={() => handleClick(5)} value={square[5]} />
          </div>
          <div className="row">
            <Square onClickFun={() => handleClick(6)} value={square[6]} />
            <Square onClickFun={() => handleClick(7)} value={square[7]} />
            <Square onClickFun={() => handleClick(8)} value={square[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
