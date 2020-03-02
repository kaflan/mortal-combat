import React from "react";
import { Link } from "react-router-dom";


const GameOver = () => (<section className="game-over">
    <h1>Game Over</h1>
    <Link to="/"> Repick characters</Link>
</section>);

export default GameOver;
