import { useEffect, useRef } from 'react';
import useAgregarMas from '../Hooks/useAgregarMas';
import useFilms from '../Hooks/useFilms';


export default function Films() {
    const {films, loadMoreFilms} = useFilms(1)
    const nodo = document.getElementById('films')
    const funcionAgregadora = useAgregarMas(films, loadMoreFilms, nodo)

    const observadoRef = useRef(null);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            funcionAgregadora();
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
      observer.observe(observadoRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, [funcionAgregadora]);
  

  return (
    <div>
    <div id="films"></div>
    <div ref={observadoRef} id="Observado"></div>
    </div>
  )
}

