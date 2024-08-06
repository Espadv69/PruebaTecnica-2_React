import responseResults from '../../mocks/with-result.json'
// import withoutResults from '../mocks/no-result.json'

export function useMovies() {
  // Get the movies array from the mock JSON response
  const movies = responseResults.Search

  // Map the movies array to a new format with specific properties
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  // Return the mapped movies array
  return { movies: mappedMovies }
}
