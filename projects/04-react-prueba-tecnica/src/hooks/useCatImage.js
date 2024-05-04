import { useState, useEffect } from "react";

const URI_CAT_IMG = 'https://cataas.com/cat/says/';


export function useCatImage({fact}){
    const [keyWord, setKeyWord] = useState('');
  
    useEffect(()=>{
      if(fact === null) return
      const threeWords = fact.split(' ', 3 ).join(' ');
      setKeyWord(threeWords);
    },[fact])
  
    return {urlImg : `${URI_CAT_IMG}${keyWord}` , keyWord}
  }////devuelve la imagen y el alt 