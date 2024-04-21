import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constantes'
import { checkWinner,checkEndGame } from './logic/logica'
import { saveGameStorage, resetGameStorage } from './logic/storage'
import { Square } from './componentes/Square'
import { WinnerModal } from './componentes/WinnerModal'



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
          <WinnerModal resetGame={resetGame}  isWinner={isWinner}  />
        }
      </main>
    </>
  )
}

export default App
