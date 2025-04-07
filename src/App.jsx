import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomeCli from './components/Clientes/HomeCli';
import InicioSe from './components/IniciosDeSe/InicioSe';


function App() {
  const [count, setCount] = useState(0)
    return(
      <Routes>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
      </Routes>
    );
    
}
export default App;