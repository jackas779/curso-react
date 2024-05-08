import responseApi  from '../mucks/responseApi.json';

export function GridFilm (){
  const movies = responseApi.Search;
  const hasmovie = movies?.length > 0;

  return(
    <>
    {
      hasmovie 
      ? (
        movies.map(e => (  
          <div key={e.imdbID} className='GridFilms' >
            <strong>{e.Title}</strong>
            <span>{e.Year}</span>
            <img src={e.Poster} alt={e.Title} />
          </div>
        )) 
      )
      : <p>no se encontro resultados</p>
    }
    </>

  )
}