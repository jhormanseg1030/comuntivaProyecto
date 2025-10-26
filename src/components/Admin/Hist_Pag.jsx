import React, { useState, useEffect } from 'react';
import './Hist_Pag.css';

const Hist_Pag = () => {
  const [currentMonth, setCurrentMonth] = useState('2024-01');
  const [loading, setLoading] = useState(true);

  const monthlyData = [
    {
      month: '2024-01',
      label: 'Enero 2024',
      methods: {
        'Nequi': { percentage: 45, transactions: 560, amount: 2061000 },
        'Daviplata': { percentage: 25, transactions: 311, amount: 1145000 },
        'Tarjeta': { percentage: 20, transactions: 249, amount: 916000 },
        'Efecty': { percentage: 10, transactions: 125, amount: 460000 }
      },
      total: { transactions: 1245, amount: 4582000 }
    },
    {
      month: '2023-12',
      label: 'Diciembre 2023',
      methods: {
        'Nequi': { percentage: 40, transactions: 480, amount: 1640000 },
        'Daviplata': { percentage: 25, transactions: 300, amount: 1025000 },
        'Tarjeta': { percentage: 23, transactions: 276, amount: 943000 },
        'Efecty': { percentage: 12, transactions: 144, amount: 492000 }
      },
      total: { transactions: 1200, amount: 4100000 }
    },
    {
      month: '2023-11',
      label: 'Noviembre 2023',
      methods: {
        'Nequi': { percentage: 38, transactions: 456, amount: 1456000 },
        'Daviplata': { percentage: 27, transactions: 324, amount: 1036800 },
        'Tarjeta': { percentage: 22, transactions: 264, amount: 844800 },
        'Efecty': { percentage: 13, transactions: 156, amount: 499200 }
      },
      total: { transactions: 1200, amount: 3836800 }
    },
    {
      month: '2023-10',
      label: 'Octubre 2023',
      methods: {
        'Nequi': { percentage: 35, transactions: 420, amount: 1260000 },
        'Daviplata': { percentage: 28, transactions: 336, amount: 1008000 },
        'Tarjeta': { percentage: 24, transactions: 288, amount: 864000 },
        'Efecty': { percentage: 13, transactions: 156, amount: 468000 }
      },
      total: { transactions: 1200, amount: 3600000 }
    }
  ];

  const paymentMethods = {
    'Nequi': { color: '#9128ac', icon: '📱', name: 'Nequi' },
    'Daviplata': { color: '#007bff', icon: '📲', name: 'Daviplata' },
    'Tarjeta': { color: '#dc3545', icon: '💳', name: 'Tarjeta Débito/Crédito' },
    'Efecty': { color: '#28a745', icon: '💰', name: 'Efecty' }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const currentData = monthlyData.find(data => data.month === currentMonth) || monthlyData[0];
  const previousData = monthlyData.find(data => data.month === getPreviousMonth(currentMonth));

  function getPreviousMonth(currentMonth) {
    const [year, month] = currentMonth.split('-').map(Number);
    let prevMonth = month - 1;
    let prevYear = year;
    
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear = year - 1;
    }
    
    return `${prevYear}-${prevMonth.toString().padStart(2, '0')}`;
  }

  const calculateTrends = () => {
    const trends = {};
    
    Object.keys(paymentMethods).forEach(method => {
      const current = currentData.methods[method]?.percentage || 0;
      const previous = previousData?.methods[method]?.percentage || 0;
      const change = current - previous;
      
      trends[method] = {
        change,
        trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
        current,
        previous
      };
    });
    
    return trends;
  };

  const trends = calculateTrends();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  const getTrendClass = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-danger';
      default: return 'text-warning';
    }
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
          <h2>💳 Historial de Métodos de Pago</h2>
          <div className="header-info">
            <div className="month-selector">
              <label className="form-label"><strong>Periodo:</strong></label>
              <select 
                value={currentMonth} 
                onChange={(e) => setCurrentMonth(e.target.value)}
                className="form-select month-select"
              >
                {monthlyData.map(month => (
                  <option key={month.month} value={month.month}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
            <span className="transaction-count badge bg-secondary">
              {currentData.total.transactions} transacciones
            </span>
          </div>
        </div>

        <div className="card-body">
          <div className="summary-section">
            <div className="summary-grid">
              <div className="summary-card total-card">
                <h3>💰 Volumen Total</h3>
                <div className="total-amount">{formatCurrency(currentData.total.amount)}</div>
                <div className="summary-details">
                  {currentData.total.transactions} transacciones en {currentData.label}
                </div>
              </div>
              
              <div className="summary-card metrics-card">
                <h3>📊 Métricas Clave</h3>
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-value">{Math.round(currentData.total.amount / currentData.total.transactions).toLocaleString()}</span>
                    <span className="metric-label">Ticket Promedio</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">+12%</span>
                    <span className="metric-label">Crecimiento Mensual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="distribution-section">
            <div className="section-grid">
              <div className="distribution-card">
                <h3>📈 Distribución Actual</h3>
                <div className="distribution-bars">
                  {Object.entries(currentData.methods)
                    .sort(([,a], [,b]) => b.percentage - a.percentage)
                    .map(([method, data]) => (
                      <div key={method} className="distribution-item">
                        <div className="method-header">
                          <span className="method-icon">{paymentMethods[method].icon}</span>
                          <span className="method-name">{paymentMethods[method].name}</span>
                          <span className="method-percentage">{data.percentage}%</span>
                        </div>
                        <div className="progress-container">
                          <div 
                            className="progress-bar"
                            style={{
                              width: `${data.percentage}%`,
                              backgroundColor: paymentMethods[method].color
                            }}
                          ></div>
                        </div>
                        <div className="method-details">
                          <span>{data.transactions} transacciones</span>
                          <span>{formatCurrency(data.amount)}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="trends-card">
                <h3>🔄 Tendencias vs Mes Anterior</h3>
                <div className="trends-list">
                  {Object.entries(trends).map(([method, trend]) => (
                    <div key={method} className="trend-item">
                      <div className="trend-method">
                        <span className="method-icon">{paymentMethods[method].icon}</span>
                        <span className="method-name">{paymentMethods[method].name}</span>
                      </div>
                      <div className="trend-data">
                        <span className="current-value">{trend.current}%</span>
                        <span className={`trend-indicator ${getTrendClass(trend.trend)}`}>
                          {getTrendIcon(trend.trend)} {trend.change > 0 ? '+' : ''}{trend.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="evolution-section">
            <h3>📅 Evolución Mensual</h3>
            <div className="evolution-table">
              <table className="table table-striped table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Mes</th>
                    <th>Nequi</th>
                    <th>Daviplata</th>
                    <th>Tarjeta</th>
                    <th>Efecty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map(monthData => (
                    <tr key={monthData.month} className={monthData.month === currentMonth ? 'current-month' : ''}>
                      <td><strong>{monthData.label}</strong></td>
                      <td>{monthData.methods.Nequi?.percentage || 0}%</td>
                      <td>{monthData.methods.Daviplata?.percentage || 0}%</td>
                      <td>{monthData.methods.Tarjeta?.percentage || 0}%</td>
                      <td>{monthData.methods.Efecty?.percentage || 0}%</td>
                      <td className="fw-bold text-success">{formatCurrency(monthData.total.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ranking-section">
            <h3>🏆 Ranking de Métodos de Pago - {currentData.label}</h3>
            <div className="ranking-cards">
              {Object.entries(currentData.methods)
                .sort(([,a], [,b]) => b.percentage - a.percentage)
                .map(([method, data], index) => (
                  <div key={method} className="ranking-card">
                    <div className="rank-header">
                      <div className="method-info">
                        <span className="method-icon">{paymentMethods[method].icon}</span>
                        <span className="method-name">{paymentMethods[method].name}</span>
                      </div>
                      <div className="rank-badge">#{index + 1}</div>
                    </div>
                    
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{
                          width: `${data.percentage}%`,
                          backgroundColor: paymentMethods[method].color
                        }}
                      ></div>
                    </div>
                    
                    <div className="method-stats">
                      <div className="stat">
                        <span className="stat-value">{data.percentage}%</span>
                        <span className="stat-label">Participación</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{data.transactions}</span>
                        <span className="stat-label">Transacciones</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{formatCurrency(data.amount)}</span>
                        <span className="stat-label">Monto Total</span>
                      </div>
                    </div>

                    <div className="trend-info">
                      <span className={`trend ${getTrendClass(trends[method]?.trend)}`}>
                        {getTrendIcon(trends[method]?.trend)} 
                        {trends[method]?.change > 0 ? '+' : ''}{trends[method]?.change}% vs mes anterior
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hist_Pag;