import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/attractions.css";

function Attractions() {
  const [attrac, setAttrac] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/attraction/1")
      .then(response => setAttrac(response.data));

  }, []);

  const ChangeContent = (id) => {
    axios
      .get(`http://localhost:8000/api/attraction/${id}`)
      .then(response => setAttrac(response.data));
  };

  return (
    <div>
      <div className="title">
        <p onClick={() => ChangeContent(1)}>L'HOMME CANON</p>

        <p onClick={() => ChangeContent(2)}>LES CRACHEURS DE FEU</p>

        <p onClick={() => ChangeContent(3)}>LA DANSE DU LION</p>

        <p onClick={() => ChangeContent(4)}>LA BOULE DE LA MORT</p>
      </div>
      <div className="content">
        <p className="content_title">{attrac[0] && attrac[0].name}</p>
        <img src={attrac[0] && attrac[0].image} alt="attrac" />
        <p className="content_detail">{attrac[0] && attrac[0].detail}</p>
      </div>
    </div>
  );
}

export default Attractions;
