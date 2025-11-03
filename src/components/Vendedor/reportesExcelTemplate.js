export const generarHTMLExcel = (titulo, contenidoHTML, fecha, hora) => {
  // Para Excel, simplemente no mostraremos imagen ya que Excel tiene limitaciones con imágenes en HTML
  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; }
        .header { 
          text-align: center;
          margin-bottom: 20px; 
          padding: 20px;
          border-bottom: 3px solid #28a745;
        }
        .logo { 
          font-size: 24px; 
          font-weight: bold; 
          color: #28a745;
          margin-bottom: 5px;
        }
        .subtitle { 
          color: #666; 
          font-size: 12px;
          margin-bottom: 10px;
        }
        .info {
          margin: 15px 0;
          font-size: 11px;
          color: #333;
        }
        h1 { 
          color: #28a745; 
          font-size: 18px;
          margin: 15px 0;
        }
        h2 { 
          color: #28a745; 
          font-size: 16px;
          margin-top: 25px;
          border-bottom: 2px solid #28a745;
          padding-bottom: 8px;
        }
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin-top: 15px;
        }
        th { 
          background-color: #28a745; 
          color: white; 
          padding: 10px;
          border: 1px solid #ddd;
          font-weight: bold;
          text-align: left;
        }
        td { 
          padding: 8px;
          border: 1px solid #ddd;
        }
        tr:nth-child(even) { background-color: #f8f9fa; }
        tr:nth-child(odd) { background-color: white; }
        .footer {
          margin-top: 30px;
          padding-top: 15px;
          border-top: 2px solid #28a745;
          text-align: center;
          font-size: 10px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🌱 COMUCTIVA</div>
        <div class="subtitle">Plataforma de Comercio Comunitario</div>
        <div class="info"><strong>Fecha:</strong> ${fecha} | <strong>Hora:</strong> ${hora}</div>
      </div>
      ${titulo ? `<h1>${titulo}</h1>` : ''}
      ${contenidoHTML}
      <div class="footer">
        <p>© ${new Date().getFullYear()} COMUCTIVA - Todos los derechos reservados</p>
        <p>Documento generado automáticamente</p>
      </div>
    </body>
    </html>
  `;
};
