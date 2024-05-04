import { useState , useEffect } from "react";
import { getRamdonImg } from "../services/fact";

export function useCatFact  () {
    const [fact, setFact] = useState('');
  
    const refrehsImgCat = () => {
      getRamdonImg().then(newFact => setFact(newFact))
    }
  
    useEffect( refrehsImgCat,[])
  
    return { fact , refrehsImgCat }
  }
  