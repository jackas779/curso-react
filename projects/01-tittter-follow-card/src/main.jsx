import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';


//// los componentes son en PascalCase y las funciones en camelCase
///parametrop con nombre entre corchetes
const Button = ({text}) =>{
  return(
    <button>
      {text}
    </button>
  )
}
////usar class name
ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     hola mundo
//     <Button text="button 1" />
//     <Button text="button 2 " />
//     <Button text="button 3" />
//   </React.StrictMode>,
  <App />
)