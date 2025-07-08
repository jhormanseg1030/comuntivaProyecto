import { Link } from 'react-router-dom';
import Cebollas from '../imagenes/Cebollas.jpg';
import Fresas from '../imagenes/Fresas.jpg';
import Mangos from '../imagenes/Mangos.jpg';
import Manzanas from '../imagenes/Manzanas.jpg';
import Naranjas from '../imagenes/Naranjas.jpg';
import Papas from '../imagenes/Papas.jpg';
import Papayas from '../imagenes/Papayas.jpg';
import Pinea from '../imagenes/Pinea.jpg';
import Platanos from '../imagenes/Platanos.jpg';
import Sandias from '../imagenes/Sandias.jpg';
import Tomates from '../imagenes/Tomates.jpg';
import Zanahorias from '../imagenes/Zanahorias.jpg';

const LisProduc = () =>{
    const productos = [
    { id: 1, nombre: "Tomates Frescos", precio: "$4000/LB", imagen: Tomates },
    { id: 2, nombre: "Manzanas", precio: "$6100/lb", imagen: Manzanas },
    { id: 3, nombre: "Zanahorias", precio: "$1800/Lb", imagen: Zanahorias },
    { id: 4, nombre: "Plátanos", precio: "$3000/Uni", imagen: Platanos },
    { id: 5, nombre: "Papayas", precio: "$3600/Uni", imagen: Papayas },
    { id: 6, nombre: "Naranjas ", precio: "$2000/lb", imagen: Naranjas },
    { id: 7, nombre: "Cebollas ", precio: "$1500/lb", imagen: Cebollas},
    { id: 8, nombre: "Sandias ", precio: "$6500/Uni", imagen: Sandias,},
    { id: 9, nombre: "Papas ", precio: "$60000/Bulto", imagen: Papas},
    { id: 10, nombre: "Piña ", precio: "$3000/Uni", imagen: Pinea, ruta:"/Productos"},
    { id: 11, nombre: "Fresas ", precio: "$6000/lb", imagen: Fresas },
    { id: 12, nombre: "Mangos ", precio: "$3000/lb", imagen: Mangos},
    ];

    return(
        <div className="productos-grid">
        <h2 className="titulo">Productos Campesinos</h2>
        <div className="grid-cont">
          {productos.map((producto) => (
            <div key={producto.id} className="productos">
                <Link to={producto.ruta || "#"}>
              <div className="imagen-cont">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
                </Link>
              <div className="texto-producto">
                <h3>{producto.nombre}</h3>
                <p className="precio">{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )

}

export default LisProduc;