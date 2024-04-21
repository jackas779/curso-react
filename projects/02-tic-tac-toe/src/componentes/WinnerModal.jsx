import { Square } from "./Square";

export function WinnerModal ({isWinner,resetGame}){
  
  if(isWinner === null) return null;
  return (
    <section  className='winner'>
      <div className='text'>
      <h2>
        {
        isWinner === false ? 'Empate' : 'Gano: '
        }
      </h2>
      <header className='win'>
        {isWinner && <Square>{isWinner}</Square> }
      </header>
      <footer>
        <button onClick={resetGame} >Reiniciar Juego</button>
      </footer>
      </div>
    </section>
  )
}