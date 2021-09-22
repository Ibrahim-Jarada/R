function generateStateArray(data) {
  const sudokuArr = [];
  data.board.forEach((row, rowIndex) => {
    const cols = [];
    sudokuArr.push({ cols: cols, rowNum: rowIndex });
    row.forEach((col, colIndex) => {
      cols.push([col, colIndex]);
    });
  });
  return sudokuArr;
}

export default generateStateArray;
