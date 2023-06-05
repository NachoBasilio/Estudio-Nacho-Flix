import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Film from '../Components/Film';

export default function useAgregarMas(films, loadMoreFilms, nodoAAgregar) {
  const [peliculas, setPeliculas] = useState([]);

  const agregarMas = async () => {
    await loadMoreFilms();
    const arrayPelis = await films;

    const nuevosPeliculas = arrayPelis.map((peli) => (
      <Film key={peli.id} title={peli.Title} poster={peli.Poster} />
    ));

    setPeliculas([...nuevosPeliculas]);
  };

  useEffect(() => {
    peliculas.forEach((pelicula) => {
      const div = document.createElement('div');
      ReactDOM.render(pelicula, div);
      nodoAAgregar.appendChild(div);
    });
  }, [peliculas, nodoAAgregar]);

  return agregarMas;
}
