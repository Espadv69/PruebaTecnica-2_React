import './App.css'
// Import Json
import responseResults from '../mocks/with-result.json'
import withoutResults from '../mocks/no-result.json'
import { MoviesRender } from './RenderMovies.jsx'

function App() {
  const movies = responseResults.Search

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
        <MoviesRender movies={movies}/>
      </main>
    </div>
  )
}

export default App
