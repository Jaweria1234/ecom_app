import React from 'react';

const Analytics = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Analytics</h1>
      <p className="page-subtitle">Detailed insights into your business performance.</p>

      <div className="analytics-grid">
        <div className="chart-box">
          <h3 className="chart-title">Revenue Trends</h3>
          <div className="chart-placeholder">
            {/* Chart component will go here */}
            <p>Monthly Revenue Chart</p>
          </div>
        </div>
        
        <div className="chart-box">
          <h3 className="chart-title">Sales by Product</h3>
          <div className="chart-placeholder">
            {/* Chart component will go here */}
            <p>Pie chart showing sales distribution</p>
          </div>
        </div>

        <div className="chart-box full-width">
          <h3 className="chart-title">Customer Acquisition</h3>
          <div className="chart-placeholder">
            {/* Chart component will go here */}
            <p>Line graph of new customers over time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;