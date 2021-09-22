import React from "react";

function Statistics() {
  const gamesData = JSON.parse(localStorage.getItem("game"));
  return (
    <div className="statistics-page">
      <h1>Track your Statistics</h1>
      <div className="statistics-container">
        <div className='titles'>
          <h2>Game Number</h2>
          <h2>Game Level</h2>
          <h2>Game Time</h2>
        </div>
        {gamesData ? (
            <div className="cards-container">
              {gamesData.map((elem, index) => {
                return <div className="card">
                <p>{index +1}</p>
                <p>{elem.level}</p>
                <p>{elem.time}</p>
                </div>
              })}
            </div>
        ) : (
          <p>'No games'</p>
        )}
      </div>
    </div>
  );
}

export default Statistics;
