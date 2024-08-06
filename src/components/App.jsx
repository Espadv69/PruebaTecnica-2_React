import './App.css'
import { useState, useEffect } from 'react'
import { MoviesRender } from './RenderMovies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App() {
  // Get the mappedMovies data from the custom hook useMovies
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('¡No se puede buscar una película vacía!')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 carácteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            MOVIE SEARCHER.
            <input onChange={handleChange} value={query} name='query' placeholder='Avengers, Star Wars, The matrix...' />
          </label>
          
          <button>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {/* Render the MoviesRender component, passing the mappedMovies as a prop */}
        <MoviesRender movies={movies}/>
      </main>
    </div>
  )
}

export default App
