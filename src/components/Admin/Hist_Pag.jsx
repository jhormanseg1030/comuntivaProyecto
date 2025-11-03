import React, { useState, useEffect, useMemo } from 'react';
import './Hist_Pag.css';
import { obtenerCompras } from '../../api/compraApi';
import { obtenerTiposPago } from '../../api/tipoPagoApi';

const Hist_Pag = () => {
  const [currentMonth, setCurrentMonth] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [compras, setCompras] = useState([]);
  const [tiposPago, setTiposPago] = useState([]);

  // Helper: normalizar nombre de método a las 4 llaves esperadas
  const normalizeMethodName = (raw) => {
    if (!raw) return null;
    const name = String(raw).toLowerCase();
    if (name.includes('nequi')) return 'Nequi';
    if (name.includes('davi')) return 'Daviplata';
    if (name.includes('tarj') || name.includes('credito') || name.includes('crédito') || name.includes('debito') || name.includes('débito') || name.includes('card')) return 'Tarjeta';
    if (name.includes('efecty') || name.includes('efectivo')) return 'Efecty';
    return null; // ignorar desconocidos
  };

  // Últimos 3 meses relativos a hoy
  const lastThreeMonths = useMemo(() => {
    const now = new Date();
    const months = [];
    for (let i = 3; i >= 1; i--) {
      const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
      const ym = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
      const label = d.toLocaleString('es-ES', { month: 'long', year: 'numeric', timeZone: 'UTC' });
      months.push({ key: ym, label: capitalize(label) });
    }
    return months;
  }, []);

  const paymentMethods = {
    'Nequi': { color: '#9128ac', icon: '📱', name: 'Nequi' },
    'Daviplata': { color: '#007bff', icon: '📲', name: 'Daviplata' },
    'Tarjeta': { color: '#dc3545', icon: '💳', name: 'Tarjeta Débito/Crédito' },
    'Efecty': { color: '#28a745', icon: '💰', name: 'Efecty' }
  };

  // Inicializar selección al mes más reciente
  useEffect(() => {
    if (lastThreeMonths.length && !currentMonth) {
      setCurrentMonth(lastThreeMonths[lastThreeMonths.length - 1].key);
    }
  }, [lastThreeMonths, currentMonth]);

  // Cargar datos desde backend
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError('');
        const [tpagos, comps] = await Promise.all([
          obtenerTiposPago().catch(async () => []),
          obtenerCompras(),
        ]);
        if (!mounted) return;
        setTiposPago(tpagos || []);
        setCompras(comps || []);
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || 'Error al cargar datos');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  // Mapa id_tipago -> nombre normalizado
  const metodoPorId = useMemo(() => {
    const map = new Map();
    tiposPago.forEach(tp => {
      const key = tp?.id_tpag ?? tp?.id_tipago;
      const val = normalizeMethodName(tp?.tip ?? tp?.tipos);
      if (key != null && val) map.set(key, val);
    });
    return map;
  }, [tiposPago]);

  // Construcción de monthlyData a partir de compras
  const monthlyData = useMemo(() => {
    const baseByMonth = new Map();
    lastThreeMonths.forEach(m => {
      baseByMonth.set(m.key, {
        month: m.key,
        label: m.label,
        methods: {
          Nequi: { percentage: 0, transactions: 0, amount: 0 },
          Daviplata: { percentage: 0, transactions: 0, amount: 0 },
          Tarjeta: { percentage: 0, transactions: 0, amount: 0 },
          Efecty: { percentage: 0, transactions: 0, amount: 0 }
        },
        total: { transactions: 0, amount: 0 }
      });
    });

    const getMonthKey = (fec_comp) => {
      if (!fec_comp) return null;
      if (typeof fec_comp === 'string' && fec_comp.length >= 7) return fec_comp.substring(0,7);
      const d = new Date(fec_comp);
      if (isNaN(d.getTime())) return null;
      return `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}`;
    };

    compras.forEach(c => {
      const mk = getMonthKey(c?.fec_comp);
      if (!baseByMonth.has(mk)) return;
      const metodo = metodoPorId.get(c?.id_tipago) ?? null;
      const norm = metodo ? normalizeMethodName(metodo) : null;
      if (!norm || !baseByMonth.get(mk).methods[norm]) return;
      const m = baseByMonth.get(mk);
      m.total.transactions += 1;
      m.total.amount += Number(c?.tot ?? 0);
      m.methods[norm].transactions += 1;
      m.methods[norm].amount += Number(c?.tot ?? 0);
    });

    baseByMonth.forEach(m => {
      const totalTx = m.total.transactions || 0;
      if (totalTx > 0) {
        Object.values(m.methods).forEach(v => {
          v.percentage = Math.round((v.transactions / totalTx) * 100);
        });
      }
    });

    return Array.from(baseByMonth.values());
  }, [compras, metodoPorId, lastThreeMonths]);

  const currentData = monthlyData.find(data => data.month === currentMonth) || monthlyData[monthlyData.length - 1] || {
    month: '', label: 'Seleccionar mes', methods: { Nequi: {}, Daviplata: {}, Tarjeta: {}, Efecty: {} }, total: { transactions: 0, amount: 0 }
  };
  const previousData = useMemo(() => {
    const prevKey = getPreviousMonth(currentMonth, lastThreeMonths.map(m => m.key));
    return monthlyData.find(m => m.month === prevKey) || null;
  }, [currentMonth, lastThreeMonths, monthlyData]);

  function getPreviousMonth(currentMonth, allowedKeys = []) {
    if (!currentMonth) return '';
    const idx = allowedKeys.indexOf(currentMonth);
    if (idx > 0) return allowedKeys[idx - 1];
    const [y, m] = currentMonth.split('-').map(Number);
    const d = new Date(Date.UTC(y, (m - 1) - 1, 1));
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
  }

  const calculateTrends = () => {
    const trends = {};
    
    Object.keys(paymentMethods).forEach(method => {
      const currPct = currentData?.methods?.[method]?.percentage || 0;
      const prevPct = previousData?.methods?.[method]?.percentage || 0;
      const change = Math.round((currPct - prevPct) * 10) / 10;
      const trend = change > 0 ? 'up' : change < 0 ? 'down' : 'stable';
      trends[method] = {
        change,
        trend,
        current: currPct,
        previous: prevPct
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

  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (loading) {
    return (
      <div className="payment-history-loading">
        <div className="loading-spinner"></div>
        <p>Cargando historial de pagos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payment-history-loading">
        <p style={{color: '#dc3545'}}>Error: {error}</p>
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
                {lastThreeMonths.map(m => (
                  <option key={m.key} value={m.key}>{m.label}</option>
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
                  {currentData.total.transactions} transacciones
                </div>
              </div>
              
              <div className="summary-card metrics-card">
                <h3>📊 Métricas Clave</h3>
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-value">{formatCurrency((currentData.total.transactions > 0 ? Math.round(currentData.total.amount / currentData.total.transactions) : 0))}</span>
                    <span className="metric-label">Ticket Promedio</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{(() => {
                      const prev = (monthlyData.find(m => m.month === getPreviousMonth(currentMonth, lastThreeMonths.map(x=>x.key)))?.total?.amount) || 0;
                      const curr = currentData.total.amount || 0;
                      const growth = prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0;
                      return `${growth}%`;
                    })()}</span>
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
                  {monthlyData.every(m => m.total.transactions === 0) && (
                    <tr>
                      <td colSpan="6" style={{textAlign: 'center', padding: '20px', color: '#6c757d'}}>
                        No hay datos disponibles
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ranking-section">
            <h3>🏆 Ranking de Métodos de Pago</h3>
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