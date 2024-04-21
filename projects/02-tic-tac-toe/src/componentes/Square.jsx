export const Square = ({children,updatePoints, index,isSelected}) =>{

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