// Listar tipos de pago (DTO simplificado)
export const obtenerTiposPago = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8080/api/Tpago/listpag', {
    headers: token ? { 'Authorization': `Bearer ${token}` } : {},
  });
  if (!res.ok) {
    throw new Error('Error al obtener tipos de pago');
  }
  // Devuelve [{ id_tpag, tip }]
  return await res.json();
};

// Alternativa: listar entidad completa
export const obtenerTiposPagoRaw = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8080/api/Tpago', {
    headers: token ? { 'Authorization': `Bearer ${token}` } : {},
  });
  if (!res.ok) {
    throw new Error('Error al obtener tipos de pago');
  }
  // Devuelve [{ id_tipago, tipos }]
  return await res.json();
};
