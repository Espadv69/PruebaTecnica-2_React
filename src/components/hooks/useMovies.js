import { useState, useRef, useMemo } from 'react'  // Import necessary hooks from React
import { searchMovies } from '../../services/movies'  // Import the searchMovies function from the services

// Custom hook to handle movie search and sorting logic
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])  // State to store the list of movies
  const [loading, setLoading] = useState(false)  // State to manage loading status
  const [error, setError] = useState(null)  // State to store any error messages
  const previousSearch = useRef(search)  // useRef to keep track of the previous search term

  // useMemo to memoize the getMovies function to prevent unnecessary re-creations
  const getMovies = useMemo(() => {
    return async ({ search }) => {  // Async function to get movies based on the search term
      if (search === previousSearch.current) return  // If the search term is the same as the previous one, do nothing

      try {
        setLoading(true)  // Set loading state to true while fetching movies
        previousSearch.current = search  // Update the previous search term
        const newMovies = await searchMovies({ search })  // Fetch new movies based on the search term
        setMovies(newMovies)  // Update the movies state with the fetched movies
      } catch (e) {
        setError(e.message)  // If an error occurs, set the error state with the error message
      } finally {
        setLoading(false)  // Set loading state to false after fetching is done (either success or failure)
      }
      
      console.log('getMovies')  // Log the function call for debugging purposes
    }
  }, [])  // Empty dependency array ensures this function is only created once

  // useMemo to memoize the sortedMovies computation based on the sort state and movies array
  const sortedMovies = useMemo(() => {
    console.log('sortedMovie')  // Log the sorting action for debugging purposes
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))  // If sort is true, return a sorted copy of the movies array
      : movies  // If sort is false, return the original movies array
  }, [sort, movies])  // Dependencies are sort and movies

  // Return the sorted movies array, getMovies function, loading state, and error state
  return { movies: sortedMovies, getMovies, loading, error }
}
