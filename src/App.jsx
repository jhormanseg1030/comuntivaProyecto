import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import InicioSe from './components/iniciosesion/InicioSe';
import HomeCli from './components/Clientes/HomeCli';
import HomeTienda from "./components/Tienda/HomeTienda";
import InicioVendedor from './components/InicioVen/InicioVendedor';


function App() {
  const [count, setCount] = useState(0)
    return(
      <Routes>
        <Route path='/login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/Tienda' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Inicio' element={<InicioVendedor/>}/>
      </Routes>
    );
    
}
export default App;