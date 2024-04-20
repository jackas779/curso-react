import { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constantes'
import { checkWinner,checkEndGame } from './logic/logica'
import { saveGameStorage, resetGameStorage } from './logic/storage'


const Square = ({children,updatePoints, index,isSelected}) =>{

   const className = `square ${isSelected ? 'is-selected' : ''}`

  const handlerClick = ()=>{
    updatePoints(index);
  }

  return(
    <div className={className} onClick={handlerClick}>
      {children}
    </div>
  );
}



function App() {
  
  const [poinst, setPoinst] = useState(()=>{
    const POINS = window.localStorage.getItem('points');
    return POINS != null ? JSON.parse(POINS) : Array(9).fill();
  }
  )

  const [isTurn,setIsTurn] = useState(()=>{
    const ISTURN = window.localStorage.getItem('turn');
    return ISTURN ?? TURNS.X 
  });

  const [isWinner, setIsWinner] = useState(null);

  const resetGame = ()=>{
    setPoinst(Array(9).fill());
    setIsTurn(TURNS.X);
    setIsWinner(null);

    resetGameStorage()

  }


  const updatePoints = (index) =>{


    ///////guardamos el juego antes de ganar
    saveGameStorage({
      newPoints : poinst,
      newTurn: isTurn
    });

    if(poinst[index] || isWinner) return

    //// puntos
    const newPoints = [...poinst];
    newPoints[index] = isTurn;
    setPoinst(newPoints)

    const newTurn = isTurn === TURNS.X ? TURNS.O : TURNS.X;
    setIsTurn(newTurn);


    //// comprobamos si ya gano
    const newWinner =  checkWinner(newPoints);
    if(newWinner){
      confetti();
      setIsWinner(newWinner);
    }else if(checkEndGame(newPoints)){
      setIsWinner(false);
    }

  }



  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>

        <button onClick={resetGame} >Reiniciar juego</button>

        <section className='game'>
          {
            poinst.map((_,index)=>{
              return(
                <Square
                  key={index}
                  index={index}
                  updatePoints={updatePoints}
                >
                  {_}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={isTurn === TURNS.X}>
              {TURNS.X}
            </Square>
          <Square isSelected={isTurn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        {
          isWinner !=  null && (
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
      </main>
    </>
  )
}

export default App
