import React, { useState, useEffect } from 'react';
import './Hist_Pag.css';

const Hist_Pag = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [branch, setBranch] = useState('todas');
  const [loading, setLoading] = useState(true);

  
  const sampleData = [
    { id: 1, method: 'Efectivo', amount: 150000, date: '2024-01-15', description: 'Venta producto A', branch: 'Sucursal Norte' },
    { id: 2, method: 'Nequi', amount: 75000, date: '2024-01-16', description: 'Venta servicio B', branch: 'Sucursal Norte' },
    { id: 3, method: 'Tarjeta', amount: 200000, date: '2024-01-17', description: 'Venta producto C', branch: 'Sucursal Sur' },
    { id: 4, method: 'Daviplata', amount: 50000, date: '2024-01-18', description: 'Venta servicio D', branch: 'Sucursal Centro' },
    { id: 5, method: 'Efectivo', amount: 120000, date: '2024-01-19', description: 'Venta producto E', branch: 'Sucursal Sur' },
    { id: 6, method: 'Nequi', amount: 80000, date: '2024-01-20', description: 'Venta servicio F', branch: 'Sucursal Norte' },
    { id: 7, method: 'Tarjeta', amount: 180000, date: '2024-01-21', description: 'Venta producto G', branch: 'Sucursal Centro' },
    { id: 8, method: 'Efectivo', amount: 90000, date: '2024-01-22', description: 'Venta servicio H', branch: 'Sucursal Sur' },
  ];
 
  const paymentMethods = {
    'Efectivo': { color: '#28a745', icon: '💰' },
    'Nequi': { color: '#9128ac', icon: '📱' },
    'Tarjeta': { color: '#dc3545', icon: '💳' },
    'Daviplata': { color: '#007bff', icon: '📲' }
  };

  useEffect(() => {
    
    setTimeout(() => {
      setPaymentData(sampleData);
      setCurrentMonth('Enero 2024');
      setLoading(false);
    }, 1000);
  }, []);

 
  const filteredData = branch === 'todas' 
    ? paymentData 
    : paymentData.filter(transaction => transaction.branch === branch);

  
  const calculateStats = () => {
    const methodTotals = {};
    const methodCounts = {};
    let totalGeneral = 0;

    filteredData.forEach(transaction => {
      const method = transaction.method;
      methodTotals[method] = (methodTotals[method] || 0) + transaction.amount;
      methodCounts[method] = (methodCounts[method] || 0) + 1;
      totalGeneral += transaction.amount;
    });

    const methods = Object.keys(methodTotals);
    const ranking = methods.map(method => ({
      method,
      total: methodTotals[method],
      count: methodCounts[method],
      percentage: totalGeneral > 0 ? (methodTotals[method] / totalGeneral) * 100 : 0
    })).sort((a, b) => b.percentage - a.percentage);

    return {
      ranking,
      totalGeneral,
      transactionCount: filteredData.length
    };
  };

  const { ranking, totalGeneral, transactionCount } = calculateStats();

  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="payment-history-loading">
        <div className="loading-spinner"></div>
        <p>Cargando historial de pagos...</p>
      </div>
    );
  }

  return (
    <div className="payment-history-container">

      <div className="card">
        <div className="card-header">
          <h2>📊 Historial de Métodos de Pago</h2>
          <div className="header-info">
            <span className="month">{currentMonth}</span>
            <span className="transaction-count badge bg-secondary">{transactionCount} transacciones</span>
          </div>
        </div>

        <div className="card-body">

          <div className="filters mb-4">
            <div className="filter-group">
              <label className="form-label"><strong>Sucursal:</strong></label>
              <select 
                value={branch} 
                onChange={(e) => setBranch(e.target.value)}
                className="form-select branch-select"
                style={{ width: '250px' }}
              >
                <option value="todas">Todas las Sucursales</option>
                <option value="Sucursal Norte">Sucursal Norte</option>
                <option value="Sucursal Sur">Sucursal Sur</option>
                <option value="Sucursal Centro">Sucursal Centro</option>
              </select>
            </div>
          </div>


          <div className="summary-card alert alert-success">
            <h3 className="alert-heading">Resumen General del Mes</h3>
            <div className="total-amount h4">
              {formatCurrency(totalGeneral)}
            </div>
            <div className="summary-details">
              Total procesado en {currentMonth}
            </div>
          </div>


          <div className="ranking-section mt-4">
            <h3 className="titulo-seccion">🏆 Ranking de Métodos de Pago</h3>
            <div className="ranking-cards">
              {ranking.map((item, index) => (
                <div key={item.method} className="caja-informacion ranking-card">
                  <div className="contenido-caja">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="method-info d-flex align-items-center">
                        <span className="method-icon me-2" style={{ fontSize: '1.5rem' }}>
                          {paymentMethods[item.method]?.icon}
                        </span>
                        <span className="method-name h5 mb-0">{item.method}</span>
                      </div>
                      <div className="rank-badge badge bg-warning text-dark">#{index + 1}</div>
                    </div>
                    
           
                    <div className="progress-container mb-3">
                      <div 
                        className="progress-bar"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: paymentMethods[item.method]?.color,
                          height: '12px',
                          borderRadius: '6px'
                        }}
                      ></div>
                    </div>
                    
                  
                    <div className="method-stats row text-center">
                      <div className="col-md-4">
                        <div className="stat">
                          <span className="stat-value h6">{formatCurrency(item.total)}</span>
                          <span className="stat-label text-muted">Monto Total</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="stat">
                          <span className="stat-value h6">{item.count}</span>
                          <span className="stat-label text-muted">Transacciones</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="stat">
                          <span className="stat-value h6">{item.percentage.toFixed(1)}%</span>
                          <span className="stat-label text-muted">Participación</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="transactions-section mt-5">
            <h3 className="titulo-seccion">📋 Detalle de Transacciones</h3>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Fecha</th>
                    <th>Método de Pago</th>
                    <th>Descripción</th>
                    <th>Sucursal</th>
                    <th>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>
                        <span 
                          className="badge method-tag"
                          style={{ 
                            backgroundColor: paymentMethods[transaction.method]?.color,
                            color: 'white'
                          }}
                        >
                          {paymentMethods[transaction.method]?.icon} {transaction.method}
                        </span>
                      </td>
                      <td>{transaction.description}</td>
                      <td>{transaction.branch}</td>
                      <td className="fw-bold text-success">{formatCurrency(transaction.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hist_Pag;