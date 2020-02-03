import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import "../styles/homepage.css";

export default function Homepage() {
  let [sta, setState] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/photo")
      .then(response => setState(response.data));
  }, []);

  return (
    <div className="contain2">
      <div className="container2">
        <Carousel
          infiniteLoop
          autoPlay
          transitionTime={1000}
          showThumbs={false}

        >
          <div>
            <img src={sta[0] && sta[0].url} alt="wireframe1" />
          </div>
          <div>
            <img src={sta[1] && sta[1].url} alt="wireframe2" />
          </div>
          <div>
            <img src={sta[2] && sta[2].url} alt="wireframe3" />
          </div>
          <div>
            <img src={sta[3] && sta[3].url} alt="wireframe3" />
          </div>
        </Carousel>
      </div>

      <div className="about">
        <p className="title">A PROPOS</p>
        <p className="about_detail">
          De la vingtaine de saltimbanques qui le constituaient à ses débuts en
          1984, le Groupe Cirque du Soleil a complètement réinventé les arts du
          cirque et est devenu un chef de file mondial dans l’univers des
          spectacles sur scène. Établie à Montréal, l’organisation canadienne a
          été une source d’émerveillement pour plus de 190 millions de
          spectateurs grâce à des représentations à l’affiche dans près de 450
          villes et 60 pays. Le Groupe Cirque du Soleil compte actuellement plus
          4 000 employés, dont 1 400 artistes, provenant d’une cinquantaine de
          pays Le Groupe Cirque du Soleil élabore du contenu pour un large
          éventail de projets audacieux. En plus de produire des spectacles de
          renommée internationale, l’organisation a élargi son approche créative
          pour y inclure une grande variété de formes de divertissement,
          notamment les productions multimédias, les expériences immersives, les
          parcs thématiques et les événements spéciaux. Au-delà de ses diverses
          créations, le Groupe Cirque du Soleil vise à exercer une influence
          positive sur les gens, les collectivités et la planète au moyen de ses
          outils les plus importants : la créativité et l’art.
        </p>
      </div>
    </div>
  );
}
