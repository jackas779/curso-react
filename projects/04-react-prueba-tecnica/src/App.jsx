import { useState,useEffect } from 'react'
import './App.css'

const API_URI = "https://catfact.ninja/fact";

function App() {
  const [fact , setFact] = useState('');
  const [urlImg, setUrlImg] = useState('');
  const [keyWord,setKeyWord] =useState('');
  const [imgFact,setImgFact] =useState(false);

  useEffect(()=>{
    fetch(API_URI)
    .then(response => response.json())
    .then(data =>{
      const {fact} = data;
      setFact(fact);
      const threeFirstWords = fact.split(' ',3).join(' ');
      setUrlImg(`https://cataas.com/cat/says/${threeFirstWords}`)
      setKeyWord(threeFirstWords)
    })
  },[imgFact]);


  return (
    <>
      <main>
        <h1>Prueba tecnica de React Junior</h1>
        {fact && <p>{fact}</p>}
        { urlImg && <img src={urlImg} alt={`photo random cat using api wiht this keyword "${keyWord}"`} />}
        <button onClick={()=> setImgFact(!imgFact)} >Cambiar imagen</button>
      </main>
    </>
  )
}

export default App
