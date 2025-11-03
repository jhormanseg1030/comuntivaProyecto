export const generarHTMLPDF = (titulo, contenidoTabla, fecha, hora, logoUrl) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>COMUCTIVA - ${titulo}</title>
      <style>
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          background-color: white;
        }
        .header {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 3px solid #28a745;
          padding-bottom: 20px;
        }
        .logo-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          justify-self: start;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-self: center;
        }
        .logo {
          font-size: 32px;
          font-weight: bold;
          color: #28a745;
          margin: 0;
        }
        .subtitle {
          color: #666;
          font-size: 14px;
          margin: 0;
        }
        h1 {
          color: #28a745;
          margin: 20px 0;
        }
        h2 {
          color: #28a745;
          margin-top: 30px;
          border-bottom: 2px solid #28a745;
          padding-bottom: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          color: #666;
          font-size: 12px;
          border-top: 2px solid #28a745;
          padding-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo COMUCTIVA" class="logo-img" crossorigin="anonymous">` : ''}
        <div class="logo-text">
          <div class="logo">🌱 COMUCTIVA</div>
          <div class="subtitle">Plataforma de Comercio Comunitario</div>
        </div>
      </div>
      <h1>${titulo}</h1>
      <p><strong>Fecha:</strong> ${fecha} | <strong>Hora:</strong> ${hora}</p>
      ${contenidoTabla}
      <div class="footer">
        <p>© ${new Date().getFullYear()} COMUCTIVA - Todos los derechos reservados</p>
        <p>Documento generado automáticamente</p>
      </div>
      <div class="no-print" style="margin-top: 20px; text-align: center;">
        <button onclick="window.print()" style="background-color: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Imprimir / Guardar PDF</button>
        <button onclick="window.close()" style="background-color: #6c757d; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">Cerrar</button>
      </div>
    </body>
    </html>
  `;
};
