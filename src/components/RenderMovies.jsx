function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={`Es la portada de ${movie.Title}`} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return (
    <p>No se encontrarón resultados.</p>
  );
}

export function MoviesRender({ movies }) {  
  const hasMovies = movies?.length > 0;
  
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  );
}
