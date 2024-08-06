import { useState } from 'react'
import withResults from '../../mocks/with-result.json'
import withoutResults from '../../mocks/no-result.json'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  // Get the movies array from the mock JSON response
  const movies = responseMovies.Search

  // Map the movies array to a new format with specific properties
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    // search  ? setResponseMovies(withResults) : setResponseMovies(withoutResults)
    if (search) {
      fetch(`http://wwwomdbapi.com/?apikey=4287ad07&s${search}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
      })
    } else {
      setResponseMovies(withoutResults)
    }
  }

  // Return the mapped movies array
  return { movies: mappedMovies, getMovies }
}
