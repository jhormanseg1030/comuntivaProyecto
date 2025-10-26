import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import './App.css';
import Carrito from './components/Carrito/carro';
import Frutas from './components/Categoria_Menu/Frutas';
import Grano from './components/Categoria_Menu/Grano';
import Lacteos from './components/Categoria_Menu/Lacteos';
import Papa from './components/Categoria_Menu/Papa';
import Verduras from './components/Categoria_Menu/Verduras';
import PagCompra from './components/Compra/PagCompra';
import Actu_Clie from './components/Config_Cliente/Actu_Clie';
import Pago from './components/FinalDePago/Pago';
import Inicio_Pag from './components/Inicio/Inicio_Pag';
import InicioSe from './components/iniciosesion/InicioSe';
import Perfil from './components/Perfil/Perfil';
import ProductosTienda from './components/Productos/ProductosTi';
import QuienesSomos from './components/Quienes somos/quienSom';
import RegistrarUsu from './components/Registrar/RegistrarUsu';
import SegPrinci from './components/SegPrincipal/SegPrinci';
import ConfAdmin from './components/Admin/ConfAdmin';
import HomeTienda from "./components/Admin/HomeTienda";
import ListaProduc from './paginas/ListaProductos';
import FormularioPedido from './components/Formularios/pedidosForm/pedidosForm';
import UsuarioLayout from './paginas/UsuarioPag/UsuarioLayout';
import UsuarioList from './paginas/UsuarioPag/UsuarioList';
import CrearUsuario from './paginas/UsuarioPag/CrearUsuario';
import Unidad_Medida from './components/Formularios/UnidadMedidaForm/UnidadMedida';
import FormularioUsuario from './components/Formularios/usuarioForm/usuarioForm';
import ConfVendedor from './components/Vendedor/ConfVendedor';
import EstadoSesion from './components/EstadoSesion';


function App() {
  const [Count, SetCount] = useState(0)
    return(
      <UserProvider>
        <EstadoSesion />
        <Routes>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/Admin' element={<HomeCli></HomeCli>}></Route>
        <Route path='/TiendaDonJuan' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/Registro' element={<RegistrarUsu></RegistrarUsu>}></Route>
        <Route path='/ConfAdmin/*' element={<ConfAdmin></ConfAdmin>}></Route>
        <Route path='/Compra' element={<PagCompra></PagCompra>}></Route>
        <Route path='/Productos' element={<ProductosTienda></ProductosTienda>}></Route>
        <Route path='/Pago' element={<Pago></Pago>}></Route>
        <Route path='/Perfil' element={<Perfil></Perfil>}></Route>
        <Route path='/Frutas' element={<Frutas></Frutas>}></Route>
        <Route path='/Papa' element={<Papa></Papa>}></Route>
        <Route path='/Lacteos' element={<Lacteos></Lacteos>}></Route>
        <Route path='/Verduras' element={<Verduras></Verduras>}></Route>
        <Route path='/Grano' element={<Grano></Grano>}></Route>
        <Route path='/carrito' element ={<Carrito></Carrito>}></Route>
        <Route path="/Quienes somos" element={<QuienesSomos></QuienesSomos>} />
        <Route path='/' element={<Inicio_Pag></Inicio_Pag>}></Route>
        <Route path='/Confi_Cliente' element={<Actu_Clie></Actu_Clie>}></Route>
        <Route path='/prueba' element={<ListaProduc></ListaProduc>}></Route>
        <Route path='/listaPedi' element ={<FormularioPedido></FormularioPedido>}></Route>
        <Route path='/usuarios' element={<UsuarioLayout></UsuarioLayout>}>
        <Route path='listarUsu' element={<UsuarioList></UsuarioList>}></Route>
        <Route path='crearUsu' element={<CrearUsuario></CrearUsuario>}></Route>
        <Route path='Unidad' element ={<Unidad_Medida></Unidad_Medida>}></Route>

        </Route>
        <Route path='/formulari' element={<FormularioUsuario></FormularioUsuario>}></Route>
  <Route path='/ConfVendedor/*' element={<ConfVendedor />} />
        <Route></Route>
      </Routes>
    </UserProvider>

    );
}
export default App;
/**/