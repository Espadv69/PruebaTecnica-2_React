const API_KEY = '4287ad07'
export const searchMovies = async ({ search }) => {
  // search  ? setResponseMovies(withResults) : setResponseMovies(withoutResults)
  if (search === '') return null

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    // Get the movies array from the mock JSON response
    const movies = json.Search

    // Map the movies array to a new format with specific properties
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}