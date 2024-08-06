function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`Es la portada de ${movie.Title}`} />
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
