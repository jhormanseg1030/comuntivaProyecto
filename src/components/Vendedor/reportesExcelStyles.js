export const excelStyles = `
  body { font-family: Arial, sans-serif; }
  .header { 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px; 
    padding: 20px;
    border-bottom: 3px solid #28a745;
  }
  .logo-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  .header-text {
    text-align: center;
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
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 10px;
    border-bottom: 2px solid #28a745;
    padding-bottom: 5px;
  }
  table { 
    border-collapse: collapse; 
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
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
`;
