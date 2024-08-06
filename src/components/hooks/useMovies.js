import responseResults from '../../mocks/with-result.json'
// import withoutResults from '../mocks/no-result.json'

export function useMovies () {
  const movies = responseResults.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}