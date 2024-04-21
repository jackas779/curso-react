import { useState,useEffect } from 'react' 

function App() {
  const [state,setState] = useState(false);
  const [positions,setPositions] = useState({x:0,y:0});

  useEffect(()=>{

    const handlemove = (event)=>{
      const{clientX,clientY} = event;
      setPositions({x: clientX,y:clientY});
    }

    if(state){
      window.addEventListener('mousemove',handlemove);
    }

    // [] -> solo se ejecuta una vez cuando se monta el componente
    // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
    // undefined -> se ejecuta cada vez que se renderiza el componente

    // change body className

    return ()=>{
      window.removeEventListener('mousemove',handlemove);
    }
    
  },[state])

  useEffect(()=>{

    document.body.classList.toggle('no-cursor', state)

    return ()=>{
      document.body.classList.remove('no-cursor');
    }
  },[state])


  return (
    <>
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${positions.x}px, ${positions.y}px)`
      }}>
      </div>
        <button onClick={()=>{ setState(!state)}}>
          {state ? 'Desactivar seguimiento' : 'Activar seguimiento'}
          </button>
    </main>
    </>
  )
}

export default App
