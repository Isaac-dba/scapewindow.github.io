import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //styles

//import desde su archivo de origen
import App from './App.jsx'
import Pp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
  // <>
  //     <App />
  //     <Pp /> 
  // </>
);
createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <Pp />
  </StrictMode>
  // <>
  //     <App />
  //     <Pp /> 
  // </>
);