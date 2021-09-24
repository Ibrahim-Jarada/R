import React, { useState, useEffect ,useMemo} from "react";
import { useParams } from "react-router-dom";
import fetchGeneratedSudoku from "../functions/fetchGeneratedSudoku";
import fetchSudokuSolution from "../functions/fetchSudokuSolution";
import generateStateArray from "../functions/generateStateArray";
import SubmitBtn from "./submitBtn";
import checkSolution from "../functions/checkSolution";
import solveSudoku from "../functions/solveSudoku";
import Row from "./row";

function Game() {
  const [generatedSudoku, setGeneratedSudoku] = useState(0);
  const [solution, setSolution] = useState(0);
  const [solved, setSolved] = useState("not submitted");
  const [timerSec, setTimerSec] = useState(0);

  const { level } = useParams();
  
  const myAbortController =useMemo(()=>new AbortController(),[]);
  console.log(myAbortController)
  useEffect(() => {
    if (level) {
      fetchGeneratedSudoku(
        level,
        myAbortController,
        generateStateArray,
        setGeneratedSudoku,
        fetchSudokuSolution,
        setSolution
      );
    }
    return () => {
      myAbortController.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  useEffect(() => {
    const setTimeSec = () =>
      setTimerSec((prev) => {
        let newState = prev + 1;
        return setTimerSec(newState);
      });

    if (generatedSudoku) {
      setInterval(setTimeSec, 1000);
    }
    return () => {
      clearInterval(setTimeSec);
    };
  }, [generatedSudoku]);

  return (
    <div className="game-page">
      <div className="game-container">
        <Row
          generatedSudoku={generatedSudoku}
          setGeneratedSudoku={setGeneratedSudoku}
        />
      </div>
      <div className="btn-container">
        <button>{`${timerSec} Seconds`}</button>
        <button
          onClick={() => {
            checkSolution(level, 0, solution, generatedSudoku, setSolved);
          }}
        >
          submit solution
        </button>
        {solved === "fail" ? (
          <SubmitBtn setSolved={setSolved} content="Try again" />
        ) : solved === "solved successfully" ? (
          <SubmitBtn setSolved={setSolved} content="Congratulations" />
        ) : null}
        <button onClick={() => solveSudoku(setGeneratedSudoku, solution)}>
          Show the Solution
        </button>
      </div>
    </div>
  );
}

export default Game;
