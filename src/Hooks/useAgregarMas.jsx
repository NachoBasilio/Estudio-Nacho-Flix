export default function useAgregarMas(films, loadMoreFilms, nodoAAgregar) {

  const agregarMas = async () => {
    await loadMoreFilms();
    const arrayPelis = await films;

    arrayPelis.forEach((peli) => {
      const nodo = document.createElement('div');
      nodo.innerHTML = `<h2>${peli.Title}</h2>`;
      nodoAAgregar.appendChild(nodo);
    });

    loadMoreFilms();
  };

  return agregarMas;
}
