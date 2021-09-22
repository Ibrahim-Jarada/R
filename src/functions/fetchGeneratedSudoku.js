function fetchGeneratedSudoku(
  level,
  myAbortController,
  callback1,
  callback2,
  callback3,
  callback4
) {
  fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`, {
    signal: myAbortController.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      callback2(callback1(data));
      callback3(data, callback4, callback1);
    });
}

export default fetchGeneratedSudoku;
