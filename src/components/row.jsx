import React from "react";
import Entry from "./entry";

function Row(props) {
  const { generatedSudoku, setGeneratedSudoku } = props;
  return (
    <>
      {generatedSudoku
        ? generatedSudoku.map((row, indexX) => {
            return (
              <div className="row" key={row.rowNum}>
                {row.cols.map((entry, indexY) => {
                  return (
                    <Entry
                      colNum={indexY}
                      canChange={entry[0] ? false : true}
                      rowNum={indexX}
                      entry={entry[0]}
                      key={entry[1]}
                      setGeneratedSudoku={setGeneratedSudoku}
                    />
                  );
                })}
              </div>
            );
          })
        : null}
    </>
  );
}

export default Row;
