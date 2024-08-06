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
  // Check if there are movies to display
  const hasMovies = movies?.length > 0;
  
  return (
    // Conditionally render either the ListOfMovies component or the NoMoviesResults component based on the presence of movies
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  );
}
