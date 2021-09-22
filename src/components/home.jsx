import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-page'>
      <div className="board">
        <Link className="board-cards" to="/game/easy">
          Easy
        </Link>
        <Link className="board-cards" to="/game/medium">
          Medium
        </Link>
        <Link className="board-cards" to="/game/hard">
          Hard
        </Link>
        <Link className="board-cards" to="/game/random">
          Random
        </Link>
        <Link className="board-cards" to="/statistics">
          Statistics
        </Link>
      </div>
    </div>
  );
}

export default Home;
