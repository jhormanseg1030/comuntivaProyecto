import React from 'react';

function ReportesVendedor() {
  const descargarCSV = (csvContent, filename = 'reporte.csv') => {
    try {
      const bom = '\uFEFF'; // para Excel y acentos
      const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      alert('CSV generado');
    } catch (err) {
      console.error(err);
      alert('Error al generar CSV');
    }
  };

  const generarCSVDeEjemplo = () => {
    const csv = 'id,nombre,valor\n1,Producto A,1000\n2,Producto B,2000';
    descargarCSV(csv, 'reporte_productos.csv');
  };

  const generarPDF = () => {
    try {
      const ventana = window.open('', '_blank');
      ventana.document.write('<h1>Reporte</h1><p>Reporte de ejemplo</p>');
      ventana.print();
      ventana.close();
    } catch (err) {
      console.error(err);
      alert('Error al generar PDF');
    }
  };

  return (
    <>
      <h1>Reportes</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <button className="buttonPedi" onClick={generarCSVDeEjemplo}>Exportar a Excel (CSV)</button>
        <button className="buttonPedi" onClick={generarPDF}>Generar PDF</button>
      </div>
    </>
  );
}

export default ReportesVendedor;
