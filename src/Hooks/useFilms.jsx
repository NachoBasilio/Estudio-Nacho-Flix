import { useState, useEffect, useCallback } from 'react';

const useFilms = (initialPage = 1) => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(initialPage);

  const fetchFilms = useCallback(async (pageNumber) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=b7e6df52&s=movie&plot=full&page=${pageNumber}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setFilms([...data.Search]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchFilms(page);
  }, [fetchFilms, page]);

  const loadMoreFilms = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { films, loadMoreFilms };
};

export default useFilms;
