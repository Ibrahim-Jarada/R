function checkSolution(level, time, solution, generatedSudoku, setSolved) {
  if (JSON.stringify(solution) === JSON.stringify(generatedSudoku)) {
    setSolved("solved successfully");
    let gamesArray = localStorage.getItem("game")
      ? JSON.parse(localStorage.getItem("game"))
      : [];
    gamesArray.push({ level, time });
    localStorage.setItem("game", JSON.stringify(gamesArray));
  } else {
    setSolved("fail");
  }
}

export default checkSolution;
