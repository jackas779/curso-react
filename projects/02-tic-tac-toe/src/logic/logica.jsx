import {COMBOS_WINEER} from '../constantes'

export const checkWinner =  (newsPoints)=>{
    for( const combo of COMBOS_WINEER){
      const [a,b,c] = combo;
      if(
        newsPoints[a] &&
        newsPoints[a] === newsPoints[b] &&
        newsPoints[a] === newsPoints[c]
      ){
        return newsPoints[a]
      }
    }
    return null
  }

  export  const checkEndGame  = (newPoints)=>{
    return newPoints.every((point) => point != null);
  }