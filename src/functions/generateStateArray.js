function generateStateArray(data) {
  const sudokuArr = [];
  data.board.map((row, rowIndex) => {
    const cols = [];
    sudokuArr.push({ cols: cols, rowNum: rowIndex });
    row.map((col, colIndex) => {
      cols.push([col, colIndex]);
    });
  });
  return sudokuArr;
}

export default generateStateArray;
