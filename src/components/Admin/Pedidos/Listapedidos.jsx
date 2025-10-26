/*import { useEffect,useState } from "react";
import { obtenerPedidos, obtenerPedidosPorId } from "../../../api/pedidos";

const Listapedidos = () =>{
    const [pedidos,setPedidos]=useState ([]);
    const[pedidoDetalle,setPedidoDetalle]=useState([null]);
    const[mostrarDetalle,setMostrarDetalle]=useState([false]);

    const[error,setError]=useState(null);

    const[cargando,setCargando]=useState(true);

    const [showModalEliminar, setShowModalEliminar] = useState(false);

    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

    useEffect(() => {
    obtenerPedidos()
        .then((data) => setPedidos(data))
        .catch((err) => setError(err.message))
        .finally(() => setCargando(false));
    }, []);

    const verDetalle = (ped) => {
    setPedidoDetalle(ped);
    setMostrarDetalle(true);
    };
    
    const cerrarDetalle = () => setMostrarDetalle(false);

    const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);
    const [pedidoEditar, setPedidoEditar] = useState(null);

    const abrirModalEdicion = (ped) => {
    setPedidodoEditar(ped); // Carga los datos del empleado
    setMostrarModalEdicion(true); // Muestra el modal
    };

    
}
export default Listapedidos;
*/