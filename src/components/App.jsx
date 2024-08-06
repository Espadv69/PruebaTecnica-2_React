import './App.css'
import { MoviesRender } from './RenderMovies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App() {
  // Get the mappedMovies data from the custom hook useMovies
  const { movies: mappedMovies } = useMovies()

  return (
    <div>
      <header>
        <form className='form'>
          <label>
            MOVIE SEARCHER.
            <input placeholder='Avengers, Star Wars, The matrix...' />
          </label>
          
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {/* Render the MoviesRender component, passing the mappedMovies as a prop */}
        <MoviesRender movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
