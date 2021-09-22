import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <h1>Sudoku</h1>
      <nav>
        <ul>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/game/easy">Easy</Link>
          </li>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/game/medium">Medium</Link>
          </li>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/game/hard">Hard</Link>
          </li>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/game/random">Random</Link>
          </li>
          <li>
            <Link style={{color:"#264653", textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
