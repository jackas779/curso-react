export const saveGameStorage = ({newPoints,newTurn})=>{
    window.localStorage.setItem('points', JSON.stringify(newPoints));
    window.localStorage.setItem('turn', newTurn);
}

export const resetGameStorage=()=>{

    window.localStorage.removeItem('points')
    window.localStorage.removeItem('turn')
}