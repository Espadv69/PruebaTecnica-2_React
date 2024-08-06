import './App.css'  // Import CSS styles for the application
import { useState, useEffect, useRef } from 'react'  // Import React hooks: useState, useEffect, and useRef
import { MoviesRender } from './RenderMovies.jsx'  // Import the MoviesRender component to display movies
import { useMovies } from './hooks/useMovies.js'  // Import the useMovies custom hook to fetch movie data

// Custom hook to handle search logic
function useSearch() {
  const [search, updateSearch] = useState('')  // State for search query
  const [error, setError] = useState(null)  // State for error messages
  const isFirstInput = useRef(true)  // Ref to check if it is the first search input

  useEffect(() => {
    // Check if it's the first input
    if (isFirstInput.current) {
      isFirstInput.current = search === ''  // Set to false if the search is not empty
      return  // Exit early
    }

    // Validate the search input
    if (search === '') {
      setError('Cannot search for an empty movie!')  // Set error if search is empty
      return  // Exit early
    }

    if (search.match(/^\d+$/)) {
      setError('Cannot search for a movie with a number')  // Set error if search contains only numbers
      return  // Exit early
    }

    if (search.length < 3) {
      setError('Search must be at least 3 characters long')  // Set error if search length is less than 3 characters
      return  // Exit early
    }

    setError(null)  // Clear error if search is valid
  }, [search])  // Depend on `search` state to run the effect

  return { search, updateSearch, error }  // Return the search state, update function, and error
}

// Main App component
function App() {
  // Get movie data from the custom hook useMovies
  const { movies } = useMovies()
  // Get search state, update function, and error from the custom hook useSearch
  const { search, updateSearch, error } = useSearch()

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()  // Prevent the default form submission behavior
    console.log({ search })  // Log the search query to the console
    updateSearch('')  // Clear the search input field after submission
  }

  // Handle changes in the search input field
  const handleChange = (event) => {
    updateSearch(event.target.value)  // Update the search state with the new value
  }

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>  {/* Form for submitting search queries */}

            <input 
              onChange={handleChange}  // Update state on input change
              value={search}  // Set input value to the current search state
              name='search'  // Name of the input field
              placeholder='Avengers, Star Wars, The matrix...'  // Placeholder text for the input field
            />

          <button>Search</button>  {/* Button to submit the search form */}
        </form>
        {error && <p className='error'>{error}</p>}  {/* Display error message if there is an error */}
      </header>

      <main>
        {/* Render the MoviesRender component, passing the movie data as a prop */}
        <MoviesRender movies={movies} />
      </main>
    </div>
  )
}

export default App  // Export the App component as the default export
