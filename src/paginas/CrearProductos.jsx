// src/pages/CrearProducto.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearProducto } from '../api/productoApi';
import './productospag.css';

const CrearProducto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    descripcion: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      await crearProducto(dataToSend);
      alert('Producto creado exitosamente');
      navigate('/productos');
    } catch (error) {
      console.error('Error al crear producto:', error);
      alert(error.message);  // Muestra mensaje del backend (ej. "Ya existe...")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Crear Nuevo Producto</h1>
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
        <button type="submit" disabled={loading} className="btn-submit-crear">
          {loading ? 'Creando...' : 'Crear Producto'}
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

export default CrearProducto;