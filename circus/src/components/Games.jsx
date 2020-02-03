import React, { useEffect } from "react";
import axios from "axios";
import "../styles/games.css";

export default function Games() {
  let [game, setState] = React.useState([]);
  let [random, setRandom] = React.useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/game")
      .then(response => setState(response.data));
    setRandom(getRandomInt(5));
  }, []);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div>
      <p className="title">LISTE DES JEUX</p>
      <div className="games_content">
        {game.map(game => (
          <div className="games">

            <p>{game.name}</p>
            <a href={game.url}>
              <img src={game.image} alt={game.name} />
            </a>
          </div>
        ))}
      </div>

      <p className="title">JEU DU JOUR</p>
      <div className="games_content">
        <div className="games">
          <p>
            {game[random] && game[random].name}</p>
          <a href={game[random] && game[random].url}>
            <img
              src={game[random] && game[random].image}
              alt={game[random] && game[random].name}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
