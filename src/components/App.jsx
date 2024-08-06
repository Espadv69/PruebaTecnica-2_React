import './App.css'
import { useState } from 'react'
import { MoviesRender } from './RenderMovies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App() {
  // Get the mappedMovies data from the custom hook useMovies
  const { movies } = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            MOVIE SEARCHER.
            <input onChange={handleChange} value={query} name='query' placeholder='Avengers, Star Wars, The matrix...' />
          </label>
          
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {/* Render the MoviesRender component, passing the mappedMovies as a prop */}
        <MoviesRender movies={movies}/>
      </main>
    </div>
  )
}

export default App
