export const pdfStyles = `
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 3px solid #28a745;
    padding-bottom: 20px;
  }
  .logo-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
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
`;
