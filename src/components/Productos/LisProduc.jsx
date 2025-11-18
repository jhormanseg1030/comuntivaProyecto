import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { obtenerProductos } from '../../api/productoApi';
import './LisProduc.css';

const LisProduc = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('Error al cargar productos');
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div className="productos-grid"><p>Cargando productos...</p></div>;
  }

  if (error) {
    return <div className="productos-grid"><p>{error}</p></div>;
  }

  return (
    <div className="productos-grid">
      <h2 className="titulo">Productos Campesinos</h2>
      <div className="grid-cont">
        {productos.map((producto) => {
          console.log('[LisProduc] producto:', producto); // DEBUG
          const productoId = producto.id_pro;
          console.log('[LisProduc] productoId:', productoId); // DEBUG
          
          return (
            <div key={productoId} className="productos">
              <Link to={`/producto/${productoId}`}>
                <div className="imagen-cont">
                  {producto.imagen ? (
                    <img 
                      src={`http://localhost:8080/api/producto/imagen/${producto.imagen}`}
                      alt={producto.nombre_Producto || producto.nom}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/250x250?text=Sin+Imagen';
                      }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      Sin imagen
                    </div>
                  )}
                </div>
              </Link>
              <div className="texto-producto">
                <h3>{producto.nombre_Producto || producto.nom}</h3>
                <p className="precio">${producto.valor?.toLocaleString() || 0}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LisProduc;