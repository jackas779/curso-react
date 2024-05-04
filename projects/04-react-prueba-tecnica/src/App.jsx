import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';




function App() {
  const { fact , refrehsImgCat } = useCatFact();
  const { urlImg , keyWord } = useCatImage({ fact });

  
  const handleClick = () => {
    refrehsImgCat();
  };

  return (
    <>
      <main>
        <h1>Prueba tecnica de React Junior</h1>
        {fact && <p>{fact}</p>}
        {urlImg && ( 
          <img 
            src={urlImg} 
            alt={`photo random cat using api wiht this keyword "${keyWord}"`}
          />
        )}
        <button onClick={handleClick} >Cambiar imagen</button>
      </main>
    </>
  )
}

export default App;
