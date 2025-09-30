// src/pages/EditarProducto.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerProductoPorId, actualizarProducto } from '../../api/productoApi';
import './productospag.css';

const EditarProducto = () => {
const { id } = useParams();
const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    descripcion: ''
  });
  const [loading, setLoading] = useState(false);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const data = await obtenerProductoPorId(id);
        setFormData({
          nombre: data.nombre || '',
          precio: data.precio || '',
          stock: data.stock || '',
          descripcion: data.descripcion || ''
        });
      } catch (error) {
        console.error('Error al cargar producto:', error);
        alert(error.message);
        navigate('/productos');  // Redirige si no encuentra
      } finally {
        setCargando(false);
      }
    };
    cargarProducto();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataToSend = {
        nombre: formData.nombre,
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        descripcion: formData.descripcion
      };
      await actualizarProducto(id, dataToSend);
      alert('Producto actualizado exitosamente');
      navigate('/productos');
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (cargando) {
    return (
      <div className="container">
        <h1 className="title">Editar Producto</h1>
        <p className="loading">Cargando producto...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Editar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-submit-editar">
          {loading ? 'Actualizando...' : 'Actualizar Producto'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/productos')}
          className="btn-cancelar"
          disabled={loading}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditarProducto;