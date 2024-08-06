import './App.css'
import { MoviesRender } from './RenderMovies.jsx'
import { useMovies } from './hooks/useMovies.js'



function App() {
  const { movies: mappedMovies } = useMovies()

  return (
    <div>
      <header>
        <form className='form'>
          <label>
            BUSCADOR DE PELÍCULAS.
            <input placeholder='Avengers, Star Wars, The matrix...' />
          </label>

          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <MoviesRender movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
