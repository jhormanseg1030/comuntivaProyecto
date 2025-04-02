import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import InicioCli from './components/Clientes/IncioCli';
import InicioTienda from './components/Tienda/InicioTienda';

function App() {
  const [count, setCount] = useState(0)
    return(
       <Routes>
        <Route path='/' element={<InicioCli></InicioCli>}></Route>
        <Route path='/tienda' element={<InicioTienda></InicioTienda>}></Route>
       </Routes> 
        
    );
    
}
export default App;