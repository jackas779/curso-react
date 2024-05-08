import { GridFilm } from './components/GridFilm';
import './App.css';

export default function App () {
  

    
    return(
        <>
          <header>
            <form action="" method="GET">
              <label htmlFor="input 01">
                Que pelicula te interesa ? 
              </label>
              <input 
                type="text" 
                placeholder="avengers,batman,it,etc..."
                id="input01"
                name="name_pelicula"
              />
              <button type="submit"> Buscar </button>
            </form>
          </header>
          <main>
            <GridFilm />
            
          </main>
        </>
    )
}